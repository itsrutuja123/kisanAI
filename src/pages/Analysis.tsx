
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ImageUploader from '@/components/analysis/ImageUploader';
import QuestionnaireForm from '@/components/analysis/QuestionnaireForm';
import { AlertCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Analysis = () => {
  const [activeTab, setActiveTab] = useState('disease');

  // Placeholder functions - in a real app these would send data to your backend
  const handleDiseaseImageUpload = (file: File) => {
    console.log('Disease image uploaded:', file);
    // Simulating processing time
    setTimeout(() => {
      toast({
        title: "Image Analysis Complete",
        description: "We've detected Leaf Rust in your wheat crop. Recommended treatment: Apply fungicide containing propiconazole.",
      });
    }, 2000);
  };

  const handleSoilImageUpload = (file: File) => {
    console.log('Soil image uploaded:', file);
    // Simulating processing time
    setTimeout(() => {
      toast({
        title: "Soil Analysis Complete",
        description: "Your soil is ideal for growing wheat, rice, and mustard.",
      });
    }, 2000);
  };

  const handleQuestionnaireSubmit = (data: any) => {
    console.log('Questionnaire submitted:', data);
    // Simulating processing time
    setTimeout(() => {
      toast({
        title: "Recommendation Ready",
        description: "Based on your inputs, we recommend growing Chickpeas this season.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 kisan-gradient-bg">
        <div className="container mx-auto kisan-section">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-kisan-green-dark mb-4">
                Get AI-Powered Farming Insights
              </h1>
              <p className="text-lg text-muted-foreground">
                Upload images or answer a few questions to receive personalized recommendations for your farm.
              </p>
            </div>

            <Tabs defaultValue="disease" onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="disease">Disease Detection</TabsTrigger>
                <TabsTrigger value="soil">Soil Analysis</TabsTrigger>
                <TabsTrigger value="crop">Crop Recommendation</TabsTrigger>
              </TabsList>

              <TabsContent value="disease" className="space-y-6">
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md mb-6">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <p className="text-sm text-amber-800">
                      For best results, take close-up, well-lit photos of the affected plant parts (leaves, stems, or fruits).
                    </p>
                  </div>
                </div>

                <ImageUploader
                  title="Plant Disease Detection"
                  description="Upload a photo of your plant showing symptoms of disease"
                  onImageSelected={handleDiseaseImageUpload}
                />
              </TabsContent>

              <TabsContent value="soil" className="space-y-6">
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md mb-6">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <p className="text-sm text-amber-800">
                      Take a clear photo of your soil sample in natural light for the most accurate analysis.
                    </p>
                  </div>
                </div>

                <ImageUploader
                  title="Soil Analysis"
                  description="Upload a photo of your soil to analyze its properties"
                  onImageSelected={handleSoilImageUpload}
                />
              </TabsContent>

              <TabsContent value="crop">
                <QuestionnaireForm onSubmit={handleQuestionnaireSubmit} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Analysis;
