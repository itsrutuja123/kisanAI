
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Camera, Upload, AlertCircle, Microscope } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const DiseaseDetection = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [diseaseResult, setDiseaseResult] = useState<any>(null);
  
  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
      setDiseaseResult(null);
    }
  };
  
  // Handle camera capture (in a real app, this would access device camera)
  const handleCameraCapture = () => {
    toast({
      title: "Camera Access",
      
    });
  };
  
  // Analyze plant disease
  const analyzePlant = () => {
    if (!image) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Mock disease detection result
      setDiseaseResult({
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
        ]
      });
      
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis Complete",
        description: "We've identified the plant disease.",
      });
    }, 3000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-kisan-green-dark mb-4">Plant Disease Detection</h1>
              <p className="text-gray-600">
                Upload a photo of your plant and our AI will identify any diseases and suggest treatments.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Upload Plant Image</CardTitle>
                    <CardDescription>
                      Take a clear, close-up photo of the affected plant part.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md mb-6">
                      <div className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                        <p className="text-sm text-amber-800">
                          For best results, focus on the affected area (leaves, stems, fruits) and ensure good lighting.
                        </p>
                      </div>
                    </div>
                    
                    {!image ? (
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <Microscope className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                        <p className="text-sm text-gray-500 mb-6">
                          Upload a photo of your plant or take a picture with your camera
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                          <div>
                            <input
                              type="file"
                              accept="image/*"
                              id="plant-upload"
                              className="hidden"
                              onChange={handleImageUpload}
                            />
                            <label htmlFor="plant-upload">
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
                            alt="Plant sample"
                            className="w-full rounded-lg shadow-sm"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            className="absolute top-2 right-2 bg-white/80"
                            onClick={() => {
                              setImage(null);
                              setDiseaseResult(null);
                            }}
                          >
                            Remove
                          </Button>
                        </div>
                        <Button 
                          className="w-full kisan-btn-primary" 
                          onClick={analyzePlant}
                          disabled={isAnalyzing}
                        >
                          {isAnalyzing ? "Analyzing..." : "Detect Disease"}
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              <div>
                {diseaseResult ? (
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{diseaseResult.diseaseName}</CardTitle>
                          <CardDescription className="italic">{diseaseResult.scientificName}</CardDescription>
                        </div>
                        <div className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                          {diseaseResult.confidence}% Confidence
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Description</h3>
                        <p className="text-gray-800">{diseaseResult.description}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Recommended Treatment</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {diseaseResult.treatment.map((item: string, index: number) => (
                            <li key={index} className="text-gray-800">{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Prevention</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {diseaseResult.prevention.map((item: string, index: number) => (
                            <li key={index} className="text-gray-800">{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Recommended Products</h3>
                        <div className="space-y-2">
                          {diseaseResult.products.map((product: any, index: number) => (
                            <div key={index} className="border rounded-lg p-3">
                              <div className="flex justify-between">
                                <h4 className="font-medium">{product.name}</h4>
                                <span className="text-kisan-green font-medium">{product.price}</span>
                              </div>
                              <p className="text-sm text-gray-500">{product.activeIngredient}</p>
                              <p className="text-sm text-gray-600 mt-1">{product.availability}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <Button className="w-full">
                          Get Expert Consultation
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="h-full flex items-center justify-center">
                    <CardContent className="text-center py-12">
                      <AlertCircle className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <h3 className="text-lg font-medium text-gray-700 mb-2">No Disease Detected Yet</h3>
                      <p className="text-gray-500 max-w-xs mx-auto">
                        Upload a plant image on the left to scan for diseases and get treatment recommendations.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Disease Outbreaks</CardTitle>
                <CardDescription>
                  These plant diseases have been reported in your region recently.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      name: "Rice Blast",
                      affectedArea: "Northern Districts",
                      risk: "High",
                      image: "images/riceblast.webp"
                    },
                    {
                      name: "Tomato Leaf Curl",
                      affectedArea: "Southern Region",
                      risk: "Medium",
                      image: "images/powderymil.jpg"
                    },
                    {
                      name: "Wheat Powdery Mildew",
                      affectedArea: "Eastern Districts",
                      risk: "Low",
                      image: "images/tomatodisease.webp"
                    }
                  ].map((disease, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <img 
                        src={disease.image} 
                        alt={disease.name}
                        className="w-full h-36 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-bold text-kisan-green-dark">{disease.name}</h3>
                        <p className="text-sm text-gray-600">{disease.affectedArea}</p>
                        <div className={`mt-2 inline-block px-2 py-1 rounded text-xs font-medium ${
                          disease.risk === 'High' ? 'bg-red-100 text-red-800' : 
                          disease.risk === 'Medium' ? 'bg-amber-100 text-amber-800' : 
                          'bg-green-100 text-green-800'
                        }`}>
                          {disease.risk} Risk
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DiseaseDetection;
