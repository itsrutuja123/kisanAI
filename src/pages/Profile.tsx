
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { User, MapPin, Phone, Mail, Save, LogOut } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

const Profile = () => {
  // Mock user data - in a real app, this would come from your backend
  const [userData, setUserData] = useState({
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    phone: '+91 98765 43210',
    address: 'Village Khaspur, District Rohtak, Haryana',
    farmSize: '15 acres',
    preferredCrops: 'Wheat, Rice, Mustard'
  });

  const handleInputChange = (field: string, value: string) => {
    setUserData({
      ...userData,
      [field]: value
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save data to the backend
    toast({
      title: "Profile Updated",
      description: "Your profile changes have been saved successfully.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-kisan-green-dark mb-8">Your Profile</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Profile Sidebar */}
              <div>
                <Card>
                  <CardContent className="pt-6 flex flex-col items-center">
                    <div className="bg-kisan-green/10 p-6 rounded-full mb-4">
                      <User className="h-16 w-16 text-kisan-green" />
                    </div>
                    <h2 className="text-xl font-bold text-center mb-1">{userData.name}</h2>
                    <p className="text-gray-500 text-center mb-6 flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {userData.address.split(',')[1]}
                    </p>
                    
                    <Button variant="outline" className="w-full mb-2">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              {/* Main Profile Content */}
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSave} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <Input 
                            value={userData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                              <Mail className="h-4 w-4" />
                            </span>
                            <Input 
                              className="rounded-l-none"
                              value={userData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                              <Phone className="h-4 w-4" />
                            </span>
                            <Input 
                              className="rounded-l-none"
                              value={userData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                          <Input 
                            value={userData.address}
                            onChange={(e) => handleInputChange('address', e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <h3 className="text-lg font-semibold mb-3">Farm Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Farm Size</label>
                            <Input 
                              value={userData.farmSize}
                              onChange={(e) => handleInputChange('farmSize', e.target.value)}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Crops</label>
                            <Input 
                              value={userData.preferredCrops}
                              onChange={(e) => handleInputChange('preferredCrops', e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end pt-4">
                        <Button type="submit" className="kisan-btn-primary">
                          <Save className="h-4 w-4 mr-2" />
                          Save Changes
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
