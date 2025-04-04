
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { User, MapPin, Phone, Mail, Save, LogOut, Leaf, Droplets, ShoppingBag, CheckCircle, Calendar } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

  // Mock activity history - in a real app, this would come from your database
  const [activityHistory] = useState({
    cropRecommendations: [
      { id: 1, date: '2025-03-10', crop: 'Wheat', location: 'North Field', confidence: '92%', planted: true },
      { id: 2, date: '2025-03-15', crop: 'Rice', location: 'East Field', confidence: '87%', planted: true },
      { id: 3, date: '2025-03-28', crop: 'Mustard', location: 'South Field', confidence: '79%', planted: false }
    ],
    diseaseDetections: [
      { id: 1, date: '2025-03-20', crop: 'Wheat', disease: 'Rust', severity: 'Medium', resolved: true },
      { id: 2, date: '2025-04-01', crop: 'Rice', disease: 'Blast', severity: 'Low', resolved: false }
    ],
    marketplaceActivities: [
      { id: 1, date: '2025-02-15', crop: 'Wheat', quantity: '2 tonnes', price: '₹28,500/tonne', marketplace: 'Rohtak Mandi' },
      { id: 2, date: '2025-03-05', crop: 'Rice', quantity: '1.5 tonnes', price: '₹32,800/tonne', marketplace: 'Sonipat Mandi' }
    ],
    monitoringTasks: [
      { id: 1, date: '2025-03-22', task: 'Irrigation', crop: 'Wheat', status: 'Completed', field: 'North Field' },
      { id: 2, date: '2025-03-25', task: 'Fertilizer Application', crop: 'Rice', status: 'Completed', field: 'East Field' },
      { id: 3, date: '2025-04-02', task: 'Weed Control', crop: 'Wheat', status: 'Pending', field: 'North Field' },
      { id: 4, date: '2025-04-05', task: 'Pest Inspection', crop: 'Rice', status: 'Pending', field: 'East Field' }
    ]
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
          <div className="max-w-6xl mx-auto">
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
                
                {/* Activity Summary Card */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Activity Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Leaf className="h-5 w-5 text-green-600" />
                          <span>Crop Recommendations</span>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          {activityHistory.cropRecommendations.length}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Leaf className="h-5 w-5 text-red-600" />
                          <span>Disease Detections</span>
                        </div>
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                          {activityHistory.diseaseDetections.length}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <ShoppingBag className="h-5 w-5 text-blue-600" />
                          <span>Marketplace Sales</span>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {activityHistory.marketplaceActivities.length}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Droplets className="h-5 w-5 text-cyan-600" />
                          <span>Monitoring Tasks</span>
                        </div>
                        <span className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full">
                          {activityHistory.monitoringTasks.length}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Main Profile Content */}
              <div className="md:col-span-2">
                <Tabs defaultValue="personal">
                  <TabsList className="grid grid-cols-2 mb-6">
                    <TabsTrigger value="personal">Personal Information</TabsTrigger>
                    <TabsTrigger value="activity">Activity History</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="personal">
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
                  </TabsContent>
                  
                  <TabsContent value="activity">
                    <div className="space-y-8">
                      {/* Crop Recommendations History */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Leaf className="h-5 w-5 text-green-600" />
                            Crop Recommendations
                          </CardTitle>
                          <CardDescription>
                            History of all crop recommendations you've received
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          {activityHistory.cropRecommendations.length > 0 ? (
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="border-b">
                                    <th className="text-left py-2 font-medium">Date</th>
                                    <th className="text-left py-2 font-medium">Crop</th>
                                    <th className="text-left py-2 font-medium">Location</th>
                                    <th className="text-left py-2 font-medium">Confidence</th>
                                    <th className="text-left py-2 font-medium">Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {activityHistory.cropRecommendations.map(rec => (
                                    <tr key={rec.id} className="border-b hover:bg-gray-50">
                                      <td className="py-2">{rec.date}</td>
                                      <td className="py-2">{rec.crop}</td>
                                      <td className="py-2">{rec.location}</td>
                                      <td className="py-2">{rec.confidence}</td>
                                      <td className="py-2">
                                        {rec.planted ? (
                                          <span className="inline-flex items-center text-green-600">
                                            <CheckCircle className="h-4 w-4 mr-1" />
                                            Planted
                                          </span>
                                        ) : (
                                          <span className="inline-flex items-center text-gray-500">
                                            <Calendar className="h-4 w-4 mr-1" />
                                            Pending
                                          </span>
                                        )}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          ) : (
                            <p className="text-gray-500 text-center py-4">No crop recommendations yet.</p>
                          )}
                        </CardContent>
                      </Card>
                      
                      {/* Disease Detections History */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Leaf className="h-5 w-5 text-red-600" />
                            Disease Detections
                          </CardTitle>
                          <CardDescription>
                            History of all disease detections made for your crops
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          {activityHistory.diseaseDetections.length > 0 ? (
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="border-b">
                                    <th className="text-left py-2 font-medium">Date</th>
                                    <th className="text-left py-2 font-medium">Crop</th>
                                    <th className="text-left py-2 font-medium">Disease</th>
                                    <th className="text-left py-2 font-medium">Severity</th>
                                    <th className="text-left py-2 font-medium">Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {activityHistory.diseaseDetections.map(detection => (
                                    <tr key={detection.id} className="border-b hover:bg-gray-50">
                                      <td className="py-2">{detection.date}</td>
                                      <td className="py-2">{detection.crop}</td>
                                      <td className="py-2">{detection.disease}</td>
                                      <td className="py-2">
                                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                                          detection.severity === 'High' ? 'bg-red-100 text-red-800' :
                                          detection.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                          'bg-green-100 text-green-800'
                                        }`}>
                                          {detection.severity}
                                        </span>
                                      </td>
                                      <td className="py-2">
                                        {detection.resolved ? (
                                          <span className="inline-flex items-center text-green-600">
                                            <CheckCircle className="h-4 w-4 mr-1" />
                                            Resolved
                                          </span>
                                        ) : (
                                          <span className="inline-flex items-center text-amber-600">
                                            <Calendar className="h-4 w-4 mr-1" />
                                            In progress
                                          </span>
                                        )}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          ) : (
                            <p className="text-gray-500 text-center py-4">No disease detections yet.</p>
                          )}
                        </CardContent>
                      </Card>
                      
                      {/* Marketplace Activities */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <ShoppingBag className="h-5 w-5 text-blue-600" />
                            Marketplace Activities
                          </CardTitle>
                          <CardDescription>
                            Record of your crop sales in the marketplace
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          {activityHistory.marketplaceActivities.length > 0 ? (
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="border-b">
                                    <th className="text-left py-2 font-medium">Date</th>
                                    <th className="text-left py-2 font-medium">Crop</th>
                                    <th className="text-left py-2 font-medium">Quantity</th>
                                    <th className="text-left py-2 font-medium">Price</th>
                                    <th className="text-left py-2 font-medium">Marketplace</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {activityHistory.marketplaceActivities.map(activity => (
                                    <tr key={activity.id} className="border-b hover:bg-gray-50">
                                      <td className="py-2">{activity.date}</td>
                                      <td className="py-2">{activity.crop}</td>
                                      <td className="py-2">{activity.quantity}</td>
                                      <td className="py-2">{activity.price}</td>
                                      <td className="py-2">{activity.marketplace}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          ) : (
                            <p className="text-gray-500 text-center py-4">No marketplace activities yet.</p>
                          )}
                        </CardContent>
                      </Card>
                      
                      {/* Monitoring Tasks */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Droplets className="h-5 w-5 text-cyan-600" />
                            Monitoring Tasks
                          </CardTitle>
                          <CardDescription>
                            Track all tasks related to your crop monitoring
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          {activityHistory.monitoringTasks.length > 0 ? (
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="border-b">
                                    <th className="text-left py-2 font-medium">Date</th>
                                    <th className="text-left py-2 font-medium">Task</th>
                                    <th className="text-left py-2 font-medium">Crop</th>
                                    <th className="text-left py-2 font-medium">Field</th>
                                    <th className="text-left py-2 font-medium">Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {activityHistory.monitoringTasks.map(task => (
                                    <tr key={task.id} className="border-b hover:bg-gray-50">
                                      <td className="py-2">{task.date}</td>
                                      <td className="py-2">{task.task}</td>
                                      <td className="py-2">{task.crop}</td>
                                      <td className="py-2">{task.field}</td>
                                      <td className="py-2">
                                        {task.status === 'Completed' ? (
                                          <span className="inline-flex items-center text-green-600">
                                            <CheckCircle className="h-4 w-4 mr-1" />
                                            Completed
                                          </span>
                                        ) : (
                                          <span className="inline-flex items-center text-amber-600">
                                            <Calendar className="h-4 w-4 mr-1" />
                                            Pending
                                          </span>
                                        )}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          ) : (
                            <p className="text-gray-500 text-center py-4">No monitoring tasks yet.</p>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
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
