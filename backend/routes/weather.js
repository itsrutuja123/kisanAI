const express = require('express');
const router = express.Router();
const axios = require('axios');

// Get current weather by location
router.get('/current/:lat/:lon', async (req, res) => {
  const { lat, lon } = req.params;
  
  try {
    // In a real implementation, you would use a weather API like OpenWeatherMap
    // For now, we'll provide mock data
    
    const weatherData = {
      location: {
        name: "Sample City",
        region: "Sample Region",
        country: "India",
        lat: parseFloat(lat),
        lon: parseFloat(lon),
      },
      current: {
        temp_c: 32.4,
        temp_f: 90.3,
        condition: {
          text: "Partly cloudy",
          icon: "//cdn.weatherapi.com/weather/64x64/day/116.png"
        },
        wind_kph: 15.1,
        wind_degree: 150,
        wind_dir: "SSE",
        pressure_mb: 1011.0,
        precip_mm: 0.0,
        humidity: 65,
        cloud: 25,
        feelslike_c: 38.2,
        feelslike_f: 100.8,
        vis_km: 10.0,
        uv: 6.0,
        gust_kph: 17.3
      },
      forecast: {
        forecastday: [
          {
            date: new Date().toISOString().split('T')[0],
            day: {
              maxtemp_c: 34.5,
              maxtemp_f: 94.1,
              mintemp_c: 28.2,
              mintemp_f: 82.8,
              avgtemp_c: 31.6,
              avgtemp_f: 88.9,
              totalprec_mm: 0.2,
              condition: {
                text: "Partly cloudy",
                icon: "//cdn.weatherapi.com/weather/64x64/day/116.png"
              },
              uv: 7.0
            },
            astro: {
              sunrise: "06:15 AM",
              sunset: "06:45 PM",
              moonrise: "09:20 PM",
              moonset: "08:30 AM",
              moon_phase: "Waning Gibbous",
              moon_illumination: "72"
            },
            hour: [
              // Hourly forecast would go here
            ]
          }
        ]
      }
    };
    
    res.json(weatherData);
  } catch (error) {
    console.error('Weather API error:', error);
    res.status(500).json({ message: 'Error fetching weather data' });
  }
});

// Get weather forecast by location
router.get('/forecast/:lat/:lon/:days', async (req, res) => {
  const { lat, lon, days } = req.params;
  
  try {
    // In a real implementation, you would call a weather API
    // For now, we'll return mock forecast data
    
    const forecastData = {
      location: {
        name: "Sample City",
        region: "Sample Region",
        country: "India",
        lat: parseFloat(lat),
        lon: parseFloat(lon),
      },
      forecast: {
        forecastday: Array.from({ length: parseInt(days) }, (_, i) => {
          const date = new Date();
          date.setDate(date.getDate() + i);
          
          return {
            date: date.toISOString().split('T')[0],
            day: {
              maxtemp_c: 32 + Math.random() * 5,
              mintemp_c: 24 + Math.random() * 5,
              avgtemp_c: 28 + Math.random() * 5,
              maxwind_kph: 10 + Math.random() * 20,
              totalprecip_mm: Math.random() * 5,
              avghumidity: 60 + Math.random() * 20,
              condition: {
                text: i % 3 === 0 ? "Sunny" : i % 3 === 1 ? "Partly cloudy" : "Light rain",
                icon: i % 3 === 0 ? "//cdn.weatherapi.com/weather/64x64/day/113.png" : 
                      i % 3 === 1 ? "//cdn.weatherapi.com/weather/64x64/day/116.png" : 
                      "//cdn.weatherapi.com/weather/64x64/day/296.png"
              },
              uv: 5 + Math.random() * 3
            },
            astro: {
              sunrise: "06:15 AM",
              sunset: "06:45 PM",
              moonrise: "09:20 PM",
              moonset: "08:30 AM"
            }
          };
        })
      }
    };
    
    res.json(forecastData);
  } catch (error) {
    console.error('Weather forecast API error:', error);
    res.status(500).json({ message: 'Error fetching weather forecast data' });
  }
});

// Get agricultural weather alerts
router.get('/alerts/:region', (req, res) => {
  const region = req.params.region;
  
  // Mock agricultural weather alerts
  const alerts = [
    {
      type: "Heavy Rainfall",
      severity: "Moderate",
      message: "Heavy rainfall expected in the next 48 hours. Consider postponing fertilizer application and ensure proper drainage in fields.",
      affectedAreas: ["Northern Districts", "Central Region"],
      startTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      endTime: new Date(Date.now() + 72 * 60 * 60 * 1000).toISOString()
    },
    {
      type: "Heat Wave",
      severity: "High",
      message: "Heat wave conditions expected next week. Ensure additional irrigation for sensitive crops and provide shade where possible.",
      affectedAreas: ["Southern Districts", "Eastern Region"],
      startTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
      endTime: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      type: "Frost Warning",
      severity: "Low",
      message: "Light frost possible in elevated areas. Consider protective measures for frost-sensitive crops.",
      affectedAreas: ["Hill Districts", "Western Heights"],
      startTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
      endTime: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString()
    }
  ];
  
  res.json(alerts);
});

module.exports = router;
