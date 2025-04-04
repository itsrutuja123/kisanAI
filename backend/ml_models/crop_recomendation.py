import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
import joblib

class CropRecommender:
    def __init__(self):
        self.model = RandomForestClassifier(
            n_estimators=100,
            random_state=42
        )
        self.scaler = StandardScaler()
        
    def train(self, X, y):
        # Scale the features
        X_scaled = self.scaler.fit_transform(X)
        # Train the model
        self.model.fit(X_scaled, y)
        
    def predict(self, features):
        # Scale the input features
        features_scaled = self.scaler.transform([features])
        # Get prediction probabilities
        probabilities = self.model.predict_proba(features_scaled)
        # Get class labels
        classes = self.model.classes_
        
        # Combine classes and probabilities
        predictions = [
            {"crop": crop, "probability": float(prob)}
            for crop, prob in zip(classes, probabilities[0])
        ]
        
        # Sort by probability and get top 3
        return sorted(predictions, key=lambda x: x["probability"], reverse=True)[:3]
    
    def save_model(self, path):
        # Save both model and scaler
        joblib.dump({
            'model': self.model,
            'scaler': self.scaler
        }, path)
    
    def load_model(self, path):
        # Load both model and scaler
        saved = joblib.load(path)
        self.model = saved['model']
        self.scaler = saved['scaler']

# Training data (example)
training_data = {
    'features': [
        # moisture, temperature, soil_type_encoded, season_encoded
        [70, 25, 0, 0],  # Clay, Summer
        [60, 18, 0, 1],  # Clay, Winter
        [80, 30, 1, 2],  # Sandy, Rainy
        # Add more training examples...
    ],
    'labels': [
        'Wheat',
        'Rice',
        'Maize',
        # Add corresponding labels...
    ]
}

# Initialize and train model
recommender = CropRecommender()
recommender.train(
    np.array(training_data['features']),
    np.array(training_data['labels'])
)

# Save the trained model
recommender.save_model('backend/ml_models/crop_model.joblib')