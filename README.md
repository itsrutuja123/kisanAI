# AI-Powered Multi-Agent Agricultural Platform for Smart Farming

**KisanAI** is a cutting-edge AI-powered platform designed to address sustainability challenges in agriculture. Through a multi-agent system, the platform integrates farmers, weather stations, agricultural experts, and vendors to optimize farming practices, reduce environmental impact, and maximize profitability.

## Problem Statement:

Agriculture faces major sustainability challenges such as:
- Water scarcity
- Excessive pesticide use
- Soil degradation
- Unpredictable market trends

Farmers often struggle to get real-time insights on soil conditions, crop selection, disease management, and market pricing. **KisanAI** aims to solve these challenges by providing an all-in-one platform that supports data-driven farming practices.

## 🎯 Project Objectives:

- **AI-Driven Crop Recommendations**: Provide crop recommendations based on soil type, moisture, and weather data.
- **Soil Image Analysis**: Classify soil texture and nutrient levels through image analysis.
- **Market Insights**: Suggest the most profitable crops based on market demand and pricing trends.
- **Disease Detection**: Detect plant diseases via image recognition and recommend treatments.
- **Smart Alerts**: Notify farmers about irrigation, fertilizer schedules, and weather changes.
- **Farmer-Vendor Connection**: Connect farmers with vendors and buyers for seeds, fertilizers, and crop sales.
- **Crop Lifecycle Guidance**: Guide farmers on the entire lifecycle of a crop—from seed selection to harvest and sale.
- **Smart Notifications**: Provide timely alerts on watering, fertilizing, pest control, and other crop-care activities.
- **Market Trends**: Show the current market prices and trends to help farmers sell their yield at maximum profit.

## 🛠 System Architecture & Technology Stack:

### Multi-Agent Framework:

- **Farmer Advisor**: Provides actionable insights based on land, crop preferences, and financial goals.
- **Market Researcher**: Analyzes regional market trends, crop pricing, and demand forecasts.
- **Crop Health Expert**: Detects diseases from uploaded plant images and suggests treatments.
- **Weather Predictor**: Integrates real-time weather data to optimize irrigation and crop care.
- **Vendor & Marketplace Agent**: Helps farmers find seeds, fertilizers, and buyers.

### Technology Stack:

| Component                    | Technology                                          |
| ---------------------------- | --------------------------------------------------- |
| **Frontend**                  | React.js, Tailwind CSS, Next.js                     |
| **Backend**                   | Node.js, Express.js                                 |
| **Database**                  | SQLite (long-term memory), PostgreSQL               |
| **Machine Learning**          | TensorFlow, OpenCV, PyTorch                        |
| **Soil & Plant Image Analysis**| CNN, Transfer Learning (ResNet, EfficientNet)       |
| **Weather & Market Data APIs**| OpenWeatherMap, AgriMarket API                      |
| **Cloud Deployment**          | AWS, Firebase                                       |

## 🚀 Features Breakdown

### 1. **Crop & Soil Analysis**
- Farmers upload soil images and provide details (location, crop preference, finances).
- AI analyzes soil texture, moisture, and fertility to recommend crops.
- Displays weather-adaptive crop suggestions for better yield.
- Provides the entire **crop lifecycle** from seed selection to harvest.

### 2. **AI-Based Plant Disease Detection**
- Farmers upload images of infected plants.
- AI classifies diseases and suggests pesticides & natural treatments.
- Provides **purchase recommendations** for pesticides and preventive measures.
- Offers **smart notifications** for pest control, watering, fertilizing, and more.

### 3. **Market Intelligence & Crop Selling**
- AI predicts best crops based on regional demand & pricing trends.
- Displays **current market trends** and prices, helping farmers maximize profit when selling their yield.
- Connects farmers to the nearest buyers & vendors.
- Provides seed & fertilizer purchasing recommendations.

### 4. **Smart Farming Alerts**
- Sends timely notifications for watering, fertilizing, pesticide application, and other key crop care activities.
- Uses real-time weather data to optimize irrigation and reduce water usage.
- Helps farmers stay on track with their **crop-care schedule** and make informed decisions.

### 5. **Farmer-Vendor Connection**
- Farmers can directly order seeds, fertilizers, and tools from recommended vendors.
- AI suggests the best vendors based on pricing & availability.
- **Seedling recommendations** based on the specific crop and weather conditions.

### 6. **Crop Lifecycle Guidance**
- After recommending crops, the platform provides farmers with a detailed lifecycle plan.
- Covers the entire process: from seedling selection, planting, care, and treatment to harvest and market sale.
- Recommends best practices for each phase of the crop lifecycle to ensure high yield and quality.


## 🌍 Expected Impact:

- **Increased Yield & Reduced Crop Loss**: Helps farmers optimize crop selection for better yields.
- **Environmental Sustainability**: Reduces water and pesticide usage, promoting eco-friendly farming practices.
- **Higher Profits**: Empowers farmers with market insights, leading to more profitable farming decisions.
- **Automation & AI Integration**: Automates farming decisions using AI and IoT technology.
- **Farmer-Vendor Network**: Creates a seamless network for farmers to connect with vendors and buyers for their needs.
- **Crop Lifecycle Support**: Offers full lifecycle guidance for crops to ensure success from planting to sale.

## 💻 Installation:

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (or use cloud database like MongoDB Atlas)

### Clone the Repository:
git clone https://github.com/itsrutuja123/kisanai-agri-vista.git
cd kisanAI
cd kisanAI-agri-vista
##For Frontend :
cd frontend
npm run dev
##For Backend
cd backend
npm start

