import { useState, useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Upload, Camera, AlertCircle, Thermometer, Droplets, Watch, Shovel, Leaf, ShoppingCart, ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import axios from 'axios';

const CropRecommendation = () => {
  // Use toast from the hook instead of importing directly
  const { toast } = useToast();
  
  // Image upload state
  const [image, setImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  
  // Form state
  const [season, setSeason] = useState('');
  const [soilType, setSoilType] = useState('');
  const [moisture, setMoisture] = useState(50);
  const [temperature, setTemperature] = useState(30);
  
  // Results state
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [selectedCrop, setSelectedCrop] = useState<string | null>(null);
  
  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImage(URL.createObjectURL(file));
    }
  };
  
  // Request device camera permission and handle capture
  const handleCameraCapture = () => {
    if (cameraInputRef.current) {
      cameraInputRef.current.click();
    } else {
      toast({
        title: "Camera Access",
        description: "Could not access camera. Please check permissions.",
      });
    }
  };
  
  // Analyze soil image using ML model
  const analyzeImage = async () => {
    if (!imageFile) {
      toast({
        title: "Error",
        description: "Please upload an image first",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const formData = new FormData();
      formData.append('image', imageFile);
      
      const response = await axios.post('/api/analyze-soil', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      const { soilType: detectedSoilType, moisture: detectedMoisture } = response.data;
      
      setSoilType(detectedSoilType);
      setMoisture(detectedMoisture);
      
      toast({
        title: "Soil Analysis Complete",
        description: "We've analyzed your soil image. You can adjust the values if needed.",
      });
    } catch (error) {
      console.error('Error analyzing soil:', error);
      
      setSoilType('clay-loam');
      setMoisture(65);
      
      toast({
        title: "Using Demo Data",
        description: "Could not connect to the analysis service. Using demo values instead.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handle form submit and get crop recommendations
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const soilTypeMap: Record<string, number> = {
        'clay': 0,
        'sandy': 1,
        'loam': 2,
        'clay-loam': 3,
        'sandy-loam': 4
      };
      
      const seasonMap: Record<string, number> = {
        'summer': 0,
        'winter': 1,
        'rainy': 2,
        'spring': 3
      };
      
      const requestData = {
        moisture: moisture,
        temperature: temperature,
        soil_type: soilTypeMap[soilType] || 0,
        season: seasonMap[season] || 0
      };
      
      const response = await axios.post('/api/recommend-crops', requestData);
      
      setRecommendations(response.data.recommendations);
      setShowResults(true);
      
      toast({
        title: "Recommendation Ready",
        description: "Based on your inputs, we've recommended suitable crops for your farm.",
      });
    } catch (error) {
      console.error('Error getting recommendations:', error);
      
      let mockRecommendations = [];
      
      if (season === 'winter' || !season) {
        mockRecommendations = [
          { crop: "Wheat", probability: 0.85, image: "images/wheat.avif", note: "Ideal for your soil conditions" },
          { crop: "Mustard", probability: 0.75, image: "images/mustard.webp", note: "Good profit potential" },
          { crop: "Chickpeas", probability: 0.70, image: "images/chickpea.webp", note: "Improves soil quality" }
        ];
      } else if (season === 'summer') {
        mockRecommendations = [
          { crop: "Cotton", probability: 0.82, image: "images/cotton.jpg", note: "Ideal for your soil conditions" },
          { crop: "Sorghum", probability: 0.78, image: "images/sourgum.jpeg", note: "Drought resistant" },
          { crop: "Sunflower", probability: 0.73, image: "images/sunflower.jpg", note: "Good profit potential" }
        ];
      } else if (season === 'rainy') {
        mockRecommendations = [
          { crop: "Rice", probability: 0.88, image: "images/rice.webp", note: "Ideal for your soil conditions" },
          { crop: "Maize", probability: 0.80, image: "images/maize.webp", note: "High yield potential" },
          { crop: "Soybeans", probability: 0.72, image: "images/soyabean.webp", note: "Improves soil fertility" }
        ];
      }
      
      setRecommendations(mockRecommendations);
      setShowResults(true);
      
      toast({
        title: "Using Demo Data",
        description: "Could not connect to the recommendation service. Using sample recommendations instead.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const resetForm = () => {
    setImage(null);
    setImageFile(null);
    setSeason('');
    setSoilType('');
    setMoisture(50);
    setTemperature(30);
    setShowResults(false);
    setRecommendations([]);
    setSelectedCrop(null);
  };

  const handleSelectCrop = (cropName: string) => {
    setSelectedCrop(cropName);
    toast({
      title: "Seedling Options",
      description: `Showing seedling options for ${cropName}`,
    });
  };

  const saveRecommendation = () => {
    toast({
      title: "Success",
      description: "Recommendation saved successfully",
    });
    resetForm();
  };

  const getSeedlingOptions = (cropName: string) => {
    const seedlingOptions = {
      'Wheat': [
        { name: 'HD-2967 Wheat', price: '₹95/kg', rating: 4.5, vendor: 'KisanSeeds' },
        { name: 'PBW-550 Wheat', price: '₹88/kg', rating: 4.3, vendor: 'AgriGrow' },
        { name: 'Organic Wheat', price: '₹120/kg', rating: 4.7, vendor: 'OrganicFarms' }
      ],
      'Rice': [
        { name: 'Basmati 1121', price: '₹110/kg', rating: 4.6, vendor: 'PremiumSeeds' },
        { name: 'IR-36 Rice', price: '₹95/kg', rating: 4.2, vendor: 'KisanSeeds' },
        { name: 'Sona Masoori', price: '₹105/kg', rating: 4.4, vendor: 'AgriGrow' }
      ],
      'Maize': [
        { name: 'DHM-121 Maize', price: '₹280/kg', rating: 4.5, vendor: 'PremiumSeeds' },
        { name: 'Sweet Corn', price: '₹320/kg', rating: 4.7, vendor: 'OrganicFarms' },
        { name: 'Baby Corn', price: '₹350/kg', rating: 4.3, vendor: 'AgriGrow' }
      ],
      'Cotton': [
        { name: 'BT Cotton', price: '₹750/packet', rating: 4.2, vendor: 'KisanSeeds' },
        { name: 'Organic Cotton', price: '₹900/packet', rating: 4.6, vendor: 'OrganicFarms' },
        { name: 'DCH-32 Cotton', price: '₹820/packet', rating: 4.4, vendor: 'PremiumSeeds' }
      ],
      'Sorghum': [
        { name: 'CSH-14 Sorghum', price: '₹180/kg', rating: 4.3, vendor: 'AgriGrow' },
        { name: 'CSV-17 Sorghum', price: '₹195/kg', rating: 4.5, vendor: 'KisanSeeds' },
        { name: 'Hybrid Sorghum', price: '₹210/kg', rating: 4.4, vendor: 'PremiumSeeds' }
      ],
      'Sunflower': [
        { name: 'KBSH-53 Sunflower', price: '₹650/kg', rating: 4.5, vendor: 'KisanSeeds' },
        { name: 'Organic Sunflower', price: '₹720/kg', rating: 4.7, vendor: 'OrganicFarms' },
        { name: 'KBSH-44 Sunflower', price: '₹680/kg', rating: 4.3, vendor: 'AgriGrow' }
      ],
      'Chickpeas': [
        { name: 'Desi Chickpea', price: '₹130/kg', rating: 4.4, vendor: 'KisanSeeds' },
        { name: 'Kabuli Chickpea', price: '₹150/kg', rating: 4.6, vendor: 'PremiumSeeds' },
        { name: 'Organic Chickpea', price: '₹175/kg', rating: 4.7, vendor: 'OrganicFarms' }
      ],
      'Mustard': [
        { name: 'Pusa Bold Mustard', price: '₹140/kg', rating: 4.3, vendor: 'AgriGrow' },
        { name: 'Yellow Mustard', price: '₹155/kg', rating: 4.5, vendor: 'KisanSeeds' },
        { name: 'Organic Mustard', price: '₹180/kg', rating: 4.6, vendor: 'OrganicFarms' }
      ],
      'Soybeans': [
        { name: 'JS-335 Soybean', price: '₹120/kg', rating: 4.3, vendor: 'KisanSeeds' },
        { name: 'Organic Soybean', price: '₹145/kg', rating: 4.6, vendor: 'OrganicFarms' },
        { name: 'JS-9560 Soybean', price: '₹135/kg', rating: 4.4, vendor: 'AgriGrow' }
      ]
    };
    
    return seedlingOptions[cropName as keyof typeof seedlingOptions] || [];
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-kisan-green-dark mb-4">Crop Recommendation</h1>
              <p className="text-gray-600">
                Get personalized crop suggestions based on your soil analysis and local conditions.
              </p>
            </div>
            
            {!showResults ? (
              <Card>
                <CardHeader>
                  <CardTitle>Analyze Your Soil</CardTitle>
                  <CardDescription>
                    Upload a soil image and fill out the form below to get crop recommendations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="photo" className="w-full">
                    <TabsList className="grid grid-cols-2 mb-8">
                      <TabsTrigger value="photo">Soil Photo Analysis</TabsTrigger>
                      <TabsTrigger value="form">Manual Input</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="photo" className="space-y-6">
                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md mb-6">
                        <div className="flex items-start">
                          <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                          <p className="text-sm text-amber-800">
                            For the most accurate results, take a clear photo of your soil in natural light. The soil should be slightly damp but not wet.
                          </p>
                        </div>
                      </div>
                      
                      {!image ? (
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <Shovel className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                          <p className="text-sm text-gray-500 mb-4">
                            Upload a photo of your soil or take a picture with your camera
                          </p>
                          <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <div>
                              <input
                                type="file"
                                accept="image/*"
                                id="soil-upload"
                                ref={fileInputRef}
                                className="hidden"
                                onChange={handleImageUpload}
                              />
                              <label htmlFor="soil-upload">
                                <Button type="button" variant="outline" className="w-full cursor-pointer">
                                  <Upload className="h-4 w-4 mr-2" />
                                  Take Photo
                                </Button>
                              </label>
                            </div>
                            <div>
                              <input
                                type="file"
                                accept="image/*"
                                capture="environment"
                                id="camera-capture"
                                ref={cameraInputRef}
                                className="hidden"
                                onChange={handleImageUpload}
                              />
                              <Button 
                                type="button" 
                                variant="outline" 
                                onClick={handleCameraCapture}
                              >
                                <Camera className="h-4 w-4 mr-2" />
                                Upload Photo
                              </Button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="relative">
                            <img
                              src={image}
                              alt="Soil sample"
                              className="w-full h-64 object-cover rounded-lg shadow-sm"
                            />
                            <Button
                              variant="outline"
                              size="sm"
                              className="absolute top-2 right-2 bg-white/80"
                              onClick={() => {
                                setImage(null);
                                setImageFile(null);
                              }}
                            >
                              Remove
                            </Button>
                          </div>
                          <Button 
                            className="w-full kisan-btn-primary" 
                            onClick={analyzeImage}
                            disabled={isLoading}
                          >
                            {isLoading ? "Analyzing..." : "Analyze Soil"}
                          </Button>
                        </div>
                      )}
                      
                      <div className="pt-6 border-t border-gray-200">
                        <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Season</label>
                              <Select value={season} onValueChange={setSeason}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select season" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="summer">Summer</SelectItem>
                                  <SelectItem value="winter">Winter</SelectItem>
                                  <SelectItem value="rainy">Rainy</SelectItem>
                                  <SelectItem value="spring">Spring</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Soil Type</label>
                              <Select value={soilType} onValueChange={setSoilType}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select soil type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="clay">Clay</SelectItem>
                                  <SelectItem value="sandy">Sandy</SelectItem>
                                  <SelectItem value="loam">Loam</SelectItem>
                                  <SelectItem value="clay-loam">Clay Loam</SelectItem>
                                  <SelectItem value="sandy-loam">Sandy Loam</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <label className="text-sm font-medium text-gray-700 flex items-center">
                                <Droplets className="h-4 w-4 mr-1 text-blue-500" />
                                Soil Moisture Level
                              </label>
                              <span className="text-sm text-gray-500">{moisture}%</span>
                            </div>
                            <Slider
                              value={[moisture]}
                              min={0}
                              max={100}
                              step={1}
                              onValueChange={(value) => setMoisture(value[0])}
                            />
                          </div>
                          
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <label className="text-sm font-medium text-gray-700 flex items-center">
                                <Thermometer className="h-4 w-4 mr-1 text-red-500" />
                                Average Temperature
                              </label>
                              <span className="text-sm text-gray-500">{temperature}°C</span>
                            </div>
                            <Slider
                              value={[temperature]}
                              min={0}
                              max={50}
                              step={1}
                              onValueChange={(value) => setTemperature(value[0])}
                            />
                          </div>
                          
                          <Button
                            type="submit"
                            className="w-full kisan-btn-primary"
                            disabled={isLoading || !season || !soilType}
                          >
                            {isLoading ? "Processing..." : "Get Recommendations"}
                          </Button>
                        </form>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="form" className="space-y-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Season</label>
                            <Select value={season} onValueChange={setSeason}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select season" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="summer">Summer</SelectItem>
                                <SelectItem value="winter">Winter</SelectItem>
                                <SelectItem value="rainy">Rainy</SelectItem>
                                <SelectItem value="spring">Spring</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Soil Type</label>
                            <Select value={soilType} onValueChange={setSoilType}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select soil type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="clay">Clay</SelectItem>
                                <SelectItem value="sandy">Sandy</SelectItem>
                                <SelectItem value="loam">Loam</SelectItem>
                                <SelectItem value="clay-loam">Clay Loam</SelectItem>
                                <SelectItem value="sandy-loam">Sandy Loam</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <label className="text-sm font-medium text-gray-700 flex items-center">
                              <Droplets className="h-4 w-4 mr-1 text-blue-500" />
                              Soil Moisture Level
                            </label>
                            <span className="text-sm text-gray-500">{moisture}%</span>
                          </div>
                          <Slider
                            value={[moisture]}
                            min={0}
                            max={100}
                            step={1}
                            onValueChange={(value) => setMoisture(value[0])}
                          />
                        </div>
                        
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <label className="text-sm font-medium text-gray-700 flex items-center">
                              <Thermometer className="h-4 w-4 mr-1 text-red-500" />
                              Average Temperature
                            </label>
                            <span className="text-sm text-gray-500">{temperature}°C</span>
                          </div>
                          <Slider
                            value={[temperature]}
                            min={0}
                            max={50}
                            step={1}
                            onValueChange={(value) => setTemperature(value[0])}
                          />
                        </div>
                        
                        <Button
                          type="submit"
                          className="w-full kisan-btn-primary"
                          disabled={isLoading || !season || !soilType}
                        >
                          {isLoading ? "Processing..." : "Get Recommendations"}
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ) : (
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-2/3 space-y-8">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Recommended Crops</CardTitle>
                      <CardDescription>
                        Based on your {soilType} soil with {moisture}% moisture level and average temperature of {temperature}°C during {season} season.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {recommendations.map((crop, index) => (
                          <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer" onClick={() => handleSelectCrop(crop.crop)}>
                            <div className="aspect-video w-full overflow-hidden">
                              <img 
                                src={crop.image || `https://source.unsplash.com/random/300x200/?${crop.crop.toLowerCase()}`} 
                                alt={crop.crop}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                              />
                            </div>
                            <CardContent className="p-4">
                              <h3 className="font-bold text-lg text-kisan-green-dark">{crop.crop}</h3>
                              <div className="flex items-center mt-2">
                                <div className="bg-green-100 rounded-full h-2 w-full">
                                  <div 
                                    className="bg-green-500 h-2 rounded-full" 
                                    style={{ width: `${crop.probability * 100}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs text-gray-600 ml-2 whitespace-nowrap">
                                  {Math.round(crop.probability * 100)}% match
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 mt-3">{crop.note}</p>
                            </CardContent>
                            <CardFooter className="p-4 pt-0 justify-end">
                              <Button variant="ghost" size="sm" className="text-kisan-green-dark">
                                View Options <ArrowRight className="ml-1 h-4 w-4" />
                              </Button>
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle>Crop Lifecycle Guide</CardTitle>
                      <CardDescription>
                        Planting to harvest timeline for {selectedCrop || recommendations[0]?.crop || 'wheat'} (example)
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative">
                        {/* Horizontal line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2"></div>
                        
                        {/* Timeline items with improved spacing and positioning */}
                        <div className="relative flex justify-between">
                          {[
                            { stage: "Planting", icon: <Shovel className="h-6 w-6" />, days: "Day 1", note: "Sow seeds 3-5cm deep" },
                            { stage: "Germination", icon: <Leaf className="h-6 w-6" />, days: "Day 7-10", note: "First shoots appear" },
                            { stage: "Growth", icon: <Droplets className="h-6 w-6" />, days: "Day 30-60", note: "Regular watering needed" },
                            { stage: "Flowering", icon: <Thermometer className="h-6 w-6" />, days: "Day 90-100", note: "Monitor temperature" },
                            { stage: "Harvest", icon: <Watch className="h-6 w-6" />, days: "Day 120-150", note: "Ready to harvest" },
                          ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center relative z-10">
                              <div className="bg-gray-100 p-3 rounded-full mb-2">
                                {item.icon}
                              </div>
                              <div className="text-center w-24">
                                <h4 className="font-semibold text-sm text-kisan-green-dark">{item.stage}</h4>
                                <p className="text-xs text-gray-500">{item.days}</p>
                                <p className="text-xs text-gray-600 mt-1">{item.note}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="flex gap-4 justify-center">
                    <Button variant="outline" onClick={resetForm}>
                      Start Over
                    </Button>
                    <Button className="kisan-btn-primary" onClick={saveRecommendation}>
                      Save Recommendation
                    </Button>
                  </div>
                </div>
                
                <div className="lg:w-1/3">
                  <Card className="sticky top-4">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Buy Seedlings
                      </CardTitle>
                      <CardDescription>
                        Purchase high-quality seedlings for your recommended crops
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {selectedCrop ? (
                        <>
                          <h3 className="font-semibold text-kisan-green-dark">{selectedCrop} Seedling Options</h3>
                          {getSeedlingOptions(selectedCrop).map((option, index) => (
                            <div key={index} className="border rounded-md p-3 hover:bg-gray-50">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-medium">{option.name}</h4>
                                  <p className="text-sm text-gray-600">Vendor: {option.vendor}</p>
                                  <div className="flex items-center mt-1">
                                    <div className="flex">
                                      {[...Array(5)].map((_, i) => (
                                        <svg key={i} className={`h-4 w-4 ${i < Math.floor(option.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                      ))}
                                    </div>
                                    <span className="text-xs text-gray-600 ml-1">({option.rating})</span>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <span className="font-bold text-kisan-green-dark">{option.price}</span>
                                </div>
                              </div>
                              <div className="mt-3">
                                <Button size="sm" className="w-full kisan-btn-primary">Add to Cart</Button>
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-500 mb-4">Select a crop to view seedling options</p>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {recommendations.map((crop, index) => (
                              <Button 
                                key={index} 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleSelectCrop(crop.crop)}
                              >
                                {crop.crop}
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CropRecommendation;
