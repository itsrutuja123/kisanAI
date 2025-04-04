import torch
import torch.nn as nn
import torchvision.transforms as transforms
from PIL import Image
import numpy as np
from typing import List, Dict

class DiseaseDetectionModel(nn.Module):
    def __init__(self, num_classes: int):
        super(DiseaseDetectionModel, self).__init__()
        # Using a pre-trained ResNet backbone
        self.backbone = torch.hub.load('pytorch/vision:v0.10.0', 'resnet50', pretrained=True)
        # Replace the final layer
        in_features = self.backbone.fc.in_features
        self.backbone.fc = nn.Linear(in_features, num_classes)
        
        # Define image preprocessing
        self.transform = transforms.Compose([
            transforms.Resize((224, 224)),
            transforms.ToTensor(),
            transforms.Normalize(mean=[0.485, 0.456, 0.406],
                               std=[0.229, 0.224, 0.225])
        ])
        
        # Disease classes
        self.classes = [
            'Healthy',
            'Bacterial Leaf Blight',
            'Brown Spot',
            'Leaf Blast',
            'Powdery Mildew',
            'Rust',
            'Septoria Leaf Spot',
            'Yellow Rust'
        ]

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return self.backbone(x)

    def preprocess_image(self, image_path: str) -> torch.Tensor:
        """Preprocess image for model input"""
        image = Image.open(image_path).convert('RGB')
        return self.transform(image).unsqueeze(0)

    def predict(self, image_path: str) -> List[Dict[str, float]]:
        """Predict disease probabilities for an image"""
        self.eval()
        with torch.no_grad():
            # Preprocess image
            image_tensor = self.preprocess_image(image_path)
            
            # Get model predictions
            outputs = self(image_tensor)
            probabilities = torch.nn.functional.softmax(outputs, dim=1)
            
            # Convert to list of dictionaries
            predictions = []
            for idx, prob in enumerate(probabilities[0]):
                predictions.append({
                    'disease': self.classes[idx],
                    'probability': float(prob)
                })
            
            # Sort by probability and get top 3
            predictions.sort(key=lambda x: x['probability'], reverse=True)
            return predictions[:3]

    def save_model(self, path: str):
        """Save model state"""
        torch.save({
            'model_state_dict': self.state_dict(),
            'classes': self.classes
        }, path)

    def load_model(self, path: str):
        """Load model state"""
        checkpoint = torch.load(path)
        self.load_state_dict(checkpoint['model_state_dict'])
        self.classes = checkpoint['classes']

# Example usage
if __name__ == "__main__":
    # Initialize model
    model = DiseaseDetectionModel(num_classes=8)
    
    # Save model (after training)
    model.save_model('backend/ml_models/disease_model.pth')
    
    # Load model
    loaded_model = DiseaseDetectionModel(num_classes=8)
    loaded_model.load_model('backend/ml_models/disease_model.pth')
    
    # Example prediction
    # predictions = loaded_model.predict('path_to_image.jpg')
    # print(predictions)