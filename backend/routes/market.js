const express = require('express');
const router = express.Router();

// Get current market prices for crops
router.get('/prices/:region', (req, res) => {
  const region = req.params.region;
  
  // Mock market price data
  const marketPrices = {
    region: region,
    lastUpdated: new Date().toISOString(),
    crops: [
      {
        name: "Rice",
        variety: "Basmati",
        price: 4200,
        unit: "per quintal",
        change: 120,
        changeType: "increase",
        trend: "rising",
        markets: [
          { name: "Karnal Mandi", price: 4250 },
          { name: "Amritsar Mandi", price: 4150 },
          { name: "Delhi Wholesale", price: 4300 }
        ]
      },
      {
        name: "Wheat",
        variety: "Sharbati",
        price: 2150,
        unit: "per quintal",
        change: -30,
        changeType: "decrease",
        trend: "falling",
        markets: [
          { name: "Indore Mandi", price: 2200 },
          { name: "Bhopal Mandi", price: 2100 },
          { name: "Ujjain Mandi", price: 2150 }
        ]
      },
      {
        name: "Cotton",
        variety: "Long Staple",
        price: 6750,
        unit: "per quintal",
        change: 200,
        changeType: "increase",
        trend: "stable",
        markets: [
          { name: "Rajkot Mandi", price: 6800 },
          { name: "Ahmedabad Mandi", price: 6700 },
          { name: "Jamnagar Mandi", price: 6750 }
        ]
      },
      {
        name: "Soybean",
        variety: "Yellow",
        price: 3850,
        unit: "per quintal",
        change: 75,
        changeType: "increase",
        trend: "rising",
        markets: [
          { name: "Indore Mandi", price: 3900 },
          { name: "Ujjain Mandi", price: 3800 },
          { name: "Dewas Mandi", price: 3850 }
        ]
      },
      {
        name: "Chana (Chickpeas)",
        variety: "Desi",
        price: 5200,
        unit: "per quintal",
        change: -100,
        changeType: "decrease",
        trend: "falling",
        markets: [
          { name: "Delhi Mandi", price: 5250 },
          { name: "Jaipur Mandi", price: 5150 },
          { name: "Bikaner Mandi", price: 5200 }
        ]
      }
    ]
  };
  
  res.json(marketPrices);
});

// Get market demand forecast
router.get('/demand-forecast', (req, res) => {
  // Mock demand forecast data
  const demandForecast = {
    lastUpdated: new Date().toISOString(),
    crops: [
      {
        name: "Rice",
        currentDemand: "High",
        forecastTrend: "Stable",
        priceOutlook: "Expected to remain stable over next 3 months",
        exportDemand: "Strong demand from Middle East",
        domesticDemand: "Steady consumption pattern",
        analysis: "Government procurement provides price floor, limiting downside risk"
      },
      {
        name: "Wheat",
        currentDemand: "Medium",
        forecastTrend: "Increasing",
        priceOutlook: "Likely to rise by 5-7% in next quarter",
        exportDemand: "Moderate export opportunities to neighboring countries",
        domesticDemand: "Rising due to lower inventory levels",
        analysis: "Reduced production in major wheat-producing states may support prices"
      },
      {
        name: "Cotton",
        currentDemand: "High",
        forecastTrend: "Increasing",
        priceOutlook: "Expected to rise by 8-10% in coming months",
        exportDemand: "Strong from Bangladesh and Vietnam",
        domesticDemand: "Increasing as textile sector recovers",
        analysis: "Lower acreage and pest issues in some regions will keep supplies tight"
      },
      {
        name: "Pulses",
        currentDemand: "Medium",
        forecastTrend: "Stable",
        priceOutlook: "Expected to remain in current range",
        exportDemand: "Limited",
        domesticDemand: "Steady year-round consumption",
        analysis: "Government buffer stocks will prevent significant price fluctuations"
      },
      {
        name: "Vegetables",
        currentDemand: "High",
        forecastTrend: "Seasonal variations",
        priceOutlook: "Volatile, weather dependent",
        exportDemand: "Moderate for specific varieties",
        domesticDemand: "Consistently high in urban centers",
        analysis: "Cold storage capacity improvements helping stabilize off-season prices"
      }
    ],
    recommendations: [
      "Consider forward contracts for cotton and wheat to secure better prices",
      "Pulses market expected to remain stable, plan regular sales strategy",
      "For vegetables, explore direct marketing to urban consumers for better margins",
      "Rice farmers should monitor government procurement policies closely"
    ]
  };
  
  res.json(demandForecast);
});

// Get nearest markets based on location
router.get('/nearby/:lat/:lon', (req, res) => {
  const { lat, lon } = req.params;
  
  // Mock nearby markets data
  const nearbyMarkets = [
    {
      name: "Central District Agricultural Market",
      distance: 5.2,
      location: {
        lat: parseFloat(lat) + 0.05,
        lon: parseFloat(lon) - 0.03
      },
      type: "Wholesale",
      tradingHours: "6:00 AM - 2:00 PM",
      tradingDays: "Monday to Saturday",
      speciality: "Grains and Pulses",
      facilities: ["Storage", "Weighing", "Online payments", "Transportation"],
      contact: "+91 9876543210"
    },
    {
      name: "Northern Regional Farmers Market",
      distance: 8.7,
      location: {
        lat: parseFloat(lat) - 0.07,
        lon: parseFloat(lon) + 0.02
      },
      type: "Retail & Wholesale",
      tradingHours: "7:00 AM - 5:00 PM",
      tradingDays: "Daily",
      speciality: "Vegetables and Fruits",
      facilities: ["Cold storage", "Packaging", "Quality testing", "Farmer stalls"],
      contact: "+91 8765432109"
    },
    {
      name: "Eastern Cooperative Market",
      distance: 12.3,
      location: {
        lat: parseFloat(lat) + 0.09,
        lon: parseFloat(lon) + 0.08
      },
      type: "Cooperative",
      tradingHours: "5:00 AM - 1:00 PM",
      tradingDays: "Monday, Wednesday, Friday",
      speciality: "Organic Products",
      facilities: ["Certification services", "Direct farmer-buyer platform", "Training center"],
      contact: "+91 7654321098"
    }
  ];
  
  res.json(nearbyMarkets);
});

module.exports = router;
