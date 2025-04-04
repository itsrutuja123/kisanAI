import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Upload, Camera, AlertCircle, Thermometer, Droplets, Watch, Shovel, Leaf } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const CropRecommendation = () => {
  // Image upload state
  const [image, setImage] = useState<string | null>(null);
  
  // Form state
  const [season, setSeason] = useState('');
  const [soilType, setSoilType] = useState('');
  const [moisture, setMoisture] = useState(50);
  const [temperature, setTemperature] = useState(30);
  
  // Results state
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
    }
  };
  
  // Handle camera capture (in a real app, this would access device camera)
  const handleCameraCapture = () => {
    toast({
      title: "Camera Access",
      description: "In a real app, this would open your device camera.",
    });
  };
  
  // Mock image analysis function
  const analyzeImage = () => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setSoilType('Clay Loam');
      setMoisture(65);
      setIsLoading(false);
      toast({
        title: "Soil Analysis Complete",
        description: "We've analyzed your soil image. You can adjust the values if needed.",
      });
    }, 2000);
  };
  
  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setShowResults(true);
      setIsLoading(false);
      toast({
        title: "Recommendation Ready",
        description: "Based on your inputs, we've recommended suitable crops for your farm.",
      });
    }, 2000);
  };
  
  const resetForm = () => {
    setImage(null);
    setSeason('');
    setSoilType('');
    setMoisture(50);
    setTemperature(30);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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
                                className="hidden"
                                onChange={handleImageUpload}
                              />
                              <label htmlFor="soil-upload">
                                <Button type="button" variant="outline" className="w-full cursor-pointer">
                                  <Upload className="h-4 w-4 mr-2" />
                                  Upload Photo
                                </Button>
                              </label>
                            </div>
                            <Button type="button" variant="outline" onClick={handleCameraCapture}>
                              <Camera className="h-4 w-4 mr-2" />
                              Take Photo
                            </Button>
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
                              onClick={() => setImage(null)}
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
              // Results section
              <div>
                <Card className="mb-8">
                  <CardHeader className="pb-2">
                    <CardTitle>Recommended Crops</CardTitle>
                    <CardDescription>
                      Based on your {soilType} soil with {moisture}% moisture level and average temperature of {temperature}°C during {season} season.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Sample recommendations based on input - in a real app, these would be AI-generated */}
                      {(season === 'winter' || !season) && (
                        <>
                          <div className="border rounded-lg overflow-hidden">
                            <img 
                              src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=500" 
                              alt="Wheat"
                              className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                              <h3 className="font-bold text-kisan-green-dark">Wheat</h3>
                              <p className="text-sm text-gray-600">Ideal for your soil conditions</p>
                            </div>
                          </div>
                          <div className="border rounded-lg overflow-hidden">
                            <img 
                              src="https://images.unsplash.com/photo-1467020341876-6f79b99c75e4?q=80&w=500" 
                              alt="Mustard"
                              className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                              <h3 className="font-bold text-kisan-green-dark">Mustard</h3>
                              <p className="text-sm text-gray-600">Good profit potential</p>
                            </div>
                          </div>
                          <div className="border rounded-lg overflow-hidden">
                            <img 
                              src="https://images.unsplash.com/photo-1593834737573-30772f4b2b8f?q=80&w=500" 
                              alt="Chickpeas"
                              className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                              <h3 className="font-bold text-kisan-green-dark">Chickpeas</h3>
                              <p className="text-sm text-gray-600">Improves soil quality</p>
                            </div>
                          </div>
                        </>
                      )}
                      
                      {season === 'summer' && (
                        <>
                          <div className="border rounded-lg overflow-hidden">
                            <img 
                              src="https://images.unsplash.com/photo-1546750561-8af5ed10a1e0?q=80&w=500" 
                              alt="Cotton"
                              className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                              <h3 className="font-bold text-kisan-green-dark">Cotton</h3>
                              <p className="text-sm text-gray-600">Ideal for your soil conditions</p>
                            </div>
                          </div>
                          <div className="border rounded-lg overflow-hidden">
                            <img 
                              src="https://images.unsplash.com/photo-1550828520-4cb496926fc9?q=80&w=500" 
                              alt="Sorghum"
                              className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                              <h3 className="font-bold text-kisan-green-dark">Sorghum</h3>
                              <p className="text-sm text-gray-600">Drought resistant</p>
                            </div>
                          </div>
                          <div className="border rounded-lg overflow-hidden">
                            <img 
                              src="https://images.unsplash.com/photo-1603352525945-e99744c29c0c?q=80&w=500" 
                              alt="Sunflower"
                              className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                              <h3 className="font-bold text-kisan-green-dark">Sunflower</h3>
                              <p className="text-sm text-gray-600">Good profit potential</p>
                            </div>
                          </div>
                        </>
                      )}
                      
                      {season === 'rainy' && (
                        <>
                          <div className="border rounded-lg overflow-hidden">
                            <img 
                              src="https://images.unsplash.com/photo-1536054935345-9aec9136553c?q=80&w=500" 
                              alt="Rice"
                              className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                              <h3 className="font-bold text-kisan-green-dark">Rice</h3>
                              <p className="text-sm text-gray-600">Ideal for your soil conditions</p>
                            </div>
                          </div>
                          <div className="border rounded-lg overflow-hidden">
                            <img 
                              src="https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=500" 
                              alt="Maize"
                              className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                              <h3 className="font-bold text-kisan-green-dark">Maize</h3>
                              <p className="text-sm text-gray-600">High yield potential</p>
                            </div>
                          </div>
                          <div className="border rounded-lg overflow-hidden">
                            <img 
                              src="https://images.unsplash.com/photo-1550745165-e27371e29f95?q=80&w=500" 
                              alt="Soybeans"
                              className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                              <h3 className="font-bold text-kisan-green-dark">Soybeans</h3>
                              <p className="text-sm text-gray-600">Improves soil fertility</p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Crop Lifecycle Guide</CardTitle>
                    <CardDescription>
                      Planting to harvest timeline for wheat (example)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2"></div>
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
                  <Button className="kisan-btn-primary">
                    Save Recommendation
                  </Button>
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
