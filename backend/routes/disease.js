const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { spawn } = require('child_process');

// Configure storage for disease detection uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/disease/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Create uploads/disease directory if it doesn't exist
const fs = require('fs');
if (!fs.existsSync('uploads/disease')) {
  fs.mkdirSync('uploads/disease', { recursive: true });
}

// Analyze plant disease
router.post('/detect', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No image uploaded' });
  }

  // In a real implementation, you would call a Python script or ML model
  // For now, we'll mock the response with sample data
  setTimeout(() => {
    const diseaseResult = {
      diseaseName: "Wheat Leaf Rust",
      scientificName: "Puccinia triticina",
      confidence: 94,
      description: "Leaf rust is a fungal disease that affects wheat and other cereals. It appears as orange-brown pustules on leaves and can reduce crop yield by up to 40% in severe cases.",
      treatment: [
        "Apply fungicide containing propiconazole as soon as possible",
        "Ensure proper spacing between plants for better air circulation",
        "Remove and destroy infected plant material"
      ],
      prevention: [
        "Plant rust-resistant wheat varieties",
        "Rotate crops to break the disease cycle",
        "Apply preventive fungicide at early growth stages in high-risk areas"
      ],
      products: [
        {
          name: "Tilt 250 EC",
          activeIngredient: "Propiconazole 25%",
          price: "₹850 per liter",
          availability: "Available at local agri-store (5km away)"
        },
        {
          name: "Score 250 EC",
          activeIngredient: "Difenoconazole 25%",
          price: "₹920 per liter",
          availability: "Available at district agri-center (15km away)"
        }
      ],
      imageUrl: `http://localhost:5000/${req.file.path}`
    };
    
    res.json(diseaseResult);
  }, 2000);
});

// Get recent disease outbreaks by region
router.get('/outbreaks/:region', (req, res) => {
  const region = req.params.region;
  
  // Mock data for regional disease outbreaks
  const outbreaks = [
    {
      name: "Rice Blast",
      affectedArea: "Northern Districts",
      risk: "High",
      date: "2025-03-15",
      image: "https://images.unsplash.com/photo-1602094777609-99adce95ee41?q=80&w=300"
    },
    {
      name: "Tomato Leaf Curl",
      affectedArea: "Southern Region",
      risk: "Medium",
      date: "2025-03-20",
      image: "https://images.unsplash.com/photo-1592921431216-ae18b45cf7ea?q=80&w=300"
    },
    {
      name: "Wheat Powdery Mildew",
      affectedArea: "Eastern Districts",
      risk: "Low",
      date: "2025-03-25",
      image: "https://images.unsplash.com/photo-1622478913853-a8e98fae014e?q=80&w=300"
    }
  ];
  
  res.json(outbreaks);
});

module.exports = router;
