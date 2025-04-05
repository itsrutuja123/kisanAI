const express = require('express');
const router = express.Router();

// Get crop recommendations based on parameters
router.post('/recommend', (req, res) => {
  const { soilType, region, rainfall, temperature, ph, season } = req.body;
  
  // In a real implementation, this would use an ML model or algorithm
  // For now, we'll return mock data
  
  // Mock recommendation logic
  let recommendations = [];
  
  if (soilType === 'loamy' && rainfall > 1000) {
    recommendations.push({
      crop: 'Rice',
      variety: 'IR-36',
      expectedYield: '5-6 tons/hectare',
      profitability: 'High',
      waterRequirement: 'High',
      growingPeriod: '120-140 days',
      suitability: 95,
      tips: [
        'Maintain 5cm water level during vegetative stage',
        'Use zinc sulfate for better yield',
        'Monitor for stem borer and leaf folder'
      ]
    });
  }
  
  if (soilType === 'clayey' || soilType === 'loamy') {
    recommendations.push({
      crop: 'Wheat',
      variety: 'HD-3226',
      expectedYield: '4-5 tons/hectare',
      profitability: 'Medium',
      waterRequirement: 'Medium',
      growingPeriod: '120-150 days',
      suitability: 85,
      tips: [
        'Sow in November for best results',
        'Apply irrigation at critical stages',
        'Watch for rust and powdery mildew'
      ]
    });
  }
  
  if ((soilType === 'sandy' || soilType === 'sandy loam') && temperature > 25) {
    recommendations.push({
      crop: 'Groundnut',
      variety: 'JL-24',
      expectedYield: '2-2.5 tons/hectare',
      profitability: 'Medium-High',
      waterRequirement: 'Low-Medium',
      growingPeriod: '110-130 days',
      suitability: 80,
      tips: [
        'Grows well in well-drained soils',
        'Requires 2-3 light irrigations',
        'Apply gypsum at flowering stage'
      ]
    });
  }
  
  // If no specific recommendations, add generic ones
  if (recommendations.length === 0) {
    recommendations = [
      {
        crop: 'Millet',
        variety: 'CO-10',
        expectedYield: '2-3 tons/hectare',
        profitability: 'Medium',
        waterRequirement: 'Low',
        growingPeriod: '90-110 days',
        suitability: 70,
        tips: [
          'Drought-resistant crop, suitable for low rainfall areas',
          'Apply phosphatic fertilizer at sowing',
          'Suitable for intercropping with pulses'
        ]
      },
      {
        crop: 'Soybean',
        variety: 'JS-335',
        expectedYield: '2.5-3 tons/hectare',
        profitability: 'Medium-High',
        waterRequirement: 'Medium',
        growingPeriod: '95-110 days',
        suitability: 65,
        tips: [
          'Grows well in well-drained soils',
          'Seed treatment with Rhizobium improves yield',
          'Monitor for yellow mosaic virus'
        ]
      }
    ];
  }
  
  res.json({ recommendations });
});

// Get crop calendar
router.get('/calendar/:region', (req, res) => {
  const region = req.params.region;
  
  // Mock crop calendar data
  const calendar = {
    region: region,
    crops: [
      {
        name: 'Rice',
        seasons: [
          {
            name: 'Kharif',
            sowingPeriod: 'June-July',
            harvestPeriod: 'November-December',
            operations: [
              { month: 'June', activities: ['Field preparation', 'Nursery raising'] },
              { month: 'July', activities: ['Transplanting', 'Irrigation', 'Weed control'] },
              { month: 'August', activities: ['Fertilizer application', 'Pest monitoring'] },
              { month: 'September', activities: ['Disease management', 'Irrigation'] },
              { month: 'October', activities: ['Drainage', 'Pre-harvest monitoring'] },
              { month: 'November', activities: ['Harvesting', 'Threshing'] }
            ]
          }
        ]
      },
      {
        name: 'Wheat',
        seasons: [
          {
            name: 'Rabi',
            sowingPeriod: 'November-December',
            harvestPeriod: 'April-May',
            operations: [
              { month: 'November', activities: ['Field preparation', 'Sowing'] },
              { month: 'December', activities: ['First irrigation', 'Weed control'] },
              { month: 'January', activities: ['Fertilizer application', 'Second irrigation'] },
              { month: 'February', activities: ['Disease management', 'Third irrigation'] },
              { month: 'March', activities: ['Pest control', 'Final irrigation'] },
              { month: 'April', activities: ['Harvesting', 'Threshing'] }
            ]
          }
        ]
      },
      {
        name: 'Cotton',
        seasons: [
          {
            name: 'Kharif',
            sowingPeriod: 'May-June',
            harvestPeriod: 'November-January',
            operations: [
              { month: 'May', activities: ['Field preparation', 'Sowing'] },
              { month: 'June', activities: ['Thinning', 'Gap filling', 'Weed management'] },
              { month: 'July', activities: ['Fertilizer application', 'Pest monitoring'] },
              { month: 'August', activities: ['Disease management', 'Irrigation'] },
              { month: 'September', activities: ['Growth regulator application', 'Pest control'] },
              { month: 'October', activities: ['Boll development monitoring'] },
              { month: 'November', activities: ['First picking', 'Pest management'] },
              { month: 'December', activities: ['Second picking'] },
              { month: 'January', activities: ['Final picking', 'Stalk destruction'] }
            ]
          }
        ]
      }
    ]
  };
  
  res.json(calendar);
});

module.exports = router;
