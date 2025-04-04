
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, Calendar, Droplets, Sun, Cloud, Wind, Sprout } from 'lucide-react';

const CropMonitoring = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-kisan-green-dark mb-4">Crop Monitoring & Alerts</h1>
              <p className="text-gray-600">
                Track your crops and receive timely alerts for watering, fertilizing, and other crucial activities.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Active Crops</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    crop: "Wheat",
                    stage: "Vegetative Growth",
                    progress: 45,
                    planted: "15 days ago",
                    nextAction: "Apply fertilizer in 2 days",
                    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=200"
                  },
                  {
                    crop: "Rice",
                    stage: "Seedling",
                    progress: 20,
                    planted: "10 days ago",
                    nextAction: "Field inspection tomorrow",
                    image: "https://images.unsplash.com/photo-1536054935345-9aec9136553c?q=80&w=200"
                  },
                  {
                    crop: "Mustard",
                    stage: "Flowering",
                    progress: 70,
                    planted: "40 days ago",
                    nextAction: "Pest control in 3 days",
                    image: "https://images.unsplash.com/photo-1594639676866-10a9bfd99f3c?q=80&w=200"
                  }
                ].map((crop, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={crop.image} 
                        alt={crop.crop} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-kisan-green-dark">{crop.crop}</h3>
                        <span className="text-xs bg-kisan-green/10 text-kisan-green rounded-full px-2 py-1">
                          {crop.stage}
                        </span>
                      </div>
                      <div className="mb-3">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Progress</span>
                          <span>{crop.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-kisan-green h-2 rounded-full" 
                            style={{ width: `${crop.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mb-2">Planted: {crop.planted}</div>
                      <div className="flex items-center text-xs text-amber-600">
                        <Calendar className="h-3 w-3 mr-1" />
                        {crop.nextAction}
                      </div>
                      <Button variant="outline" className="w-full mt-3">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Tasks</CardTitle>
                  <CardDescription>Tasks scheduled for the next 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        task: "Apply NPK Fertilizer to Wheat",
                        date: "Tomorrow",
                        field: "North Field (5 acres)",
                        notes: "Use 10kg per acre, broadcast method",
                        icon: <Sprout className="h-5 w-5 text-green-500" />
                      },
                      {
                        task: "Irrigate Rice Field",
                        date: "In 3 days",
                        field: "East Field (3 acres)",
                        notes: "Maintain 5cm water level",
                        icon: <Droplets className="h-5 w-5 text-blue-500" />
                      },
                      {
                        task: "Mustard Field Inspection",
                        date: "In 4 days",
                        field: "South Field (2 acres)",
                        notes: "Check for aphid infestation",
                        icon: <Bell className="h-5 w-5 text-amber-500" />
                      },
                      {
                        task: "Wheat Weed Control",
                        date: "In 5 days",
                        field: "North Field (5 acres)",
                        notes: "Apply post-emergent herbicide",
                        icon: <Sprout className="h-5 w-5 text-green-500" />
                      },
                    ].map((task, index) => (
                      <div key={index} className="flex items-center p-3 border rounded-lg">
                        <div className="p-2 bg-gray-100 rounded-full mr-3">
                          {task.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{task.task}</h3>
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                              {task.field} • {task.date}
                            </div>
                            <Button size="sm" variant="ghost">Mark Complete</Button>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{task.notes}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mb-8">
              <Tabs defaultValue="weather">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="weather">
                    <Cloud className="h-4 w-4 mr-2" />
                    Weather Forecast
                  </TabsTrigger>
                  <TabsTrigger value="alerts">
                    <Bell className="h-4 w-4 mr-2" />
                    Alert Settings
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="weather" className="mt-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold">Today</h3>
                              <p className="text-gray-500">April 4, 2025</p>
                            </div>
                            <div className="text-right">
                              <div className="text-3xl font-bold">28°C</div>
                              <p className="text-sm text-kisan-green">Partly Cloudy</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-gray-50 rounded-lg">
                              <div className="flex items-center text-sm text-gray-500 mb-1">
                                <Droplets className="h-4 w-4 mr-1 text-blue-500" />
                                Humidity
                              </div>
                              <div className="text-lg font-medium">65%</div>
                            </div>
                            <div className="p-3 bg-gray-50 rounded-lg">
                              <div className="flex items-center text-sm text-gray-500 mb-1">
                                <Wind className="h-4 w-4 mr-1 text-blue-300" />
                                Wind
                              </div>
                              <div className="text-lg font-medium">12 km/h</div>
                            </div>
                            <div className="p-3 bg-gray-50 rounded-lg">
                              <div className="flex items-center text-sm text-gray-500 mb-1">
                                <Sun className="h-4 w-4 mr-1 text-amber-500" />
                                UV Index
                              </div>
                              <div className="text-lg font-medium">High</div>
                            </div>
                            <div className="p-3 bg-gray-50 rounded-lg">
                              <div className="flex items-center text-sm text-gray-500 mb-1">
                                <Droplets className="h-4 w-4 mr-1 text-blue-500" />
                                Rainfall
                              </div>
                              <div className="text-lg font-medium">40%</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-3">5-Day Forecast</h3>
                          <div className="space-y-3">
                            {[
                              { day: "Tomorrow", temp: "29°C", condition: "Sunny", icon: <Sun className="h-5 w-5 text-amber-500" /> },
                              { day: "Sunday", temp: "27°C", condition: "Light Rain", icon: <Cloud className="h-5 w-5 text-blue-500" /> },
                              { day: "Monday", temp: "26°C", condition: "Rain", icon: <Cloud className="h-5 w-5 text-blue-500" /> },
                              { day: "Tuesday", temp: "28°C", condition: "Partly Cloudy", icon: <Cloud className="h-5 w-5 text-blue-300" /> },
                              { day: "Wednesday", temp: "30°C", condition: "Sunny", icon: <Sun className="h-5 w-5 text-amber-500" /> },
                            ].map((day, index) => (
                              <div key={index} className="flex justify-between items-center p-2 border-b last:border-0">
                                <div className="flex items-center">
                                  {day.icon}
                                  <span className="ml-2">{day.day}</span>
                                </div>
                                <div className="flex items-center">
                                  <span className="text-gray-500 mr-2">{day.condition}</span>
                                  <span className="font-medium">{day.temp}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t">
                        <h3 className="text-lg font-medium mb-3">Weather Impact on Crops</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {[
                            { crop: "Wheat", impact: "Favorable conditions for growth", status: "Positive" },
                            { crop: "Rice", impact: "Monitor water levels after Sunday rain", status: "Neutral" },
                            { crop: "Mustard", impact: "Possible pest pressure after rain", status: "Caution" },
                          ].map((item, index) => (
                            <div key={index} className="p-3 border rounded-lg">
                              <h4 className="font-medium">{item.crop}</h4>
                              <p className="text-sm text-gray-600 mt-1">{item.impact}</p>
                              <div className={`mt-2 inline-block px-2 py-0.5 rounded text-xs font-medium ${
                                item.status === 'Positive' ? 'bg-green-100 text-green-800' : 
                                item.status === 'Neutral' ? 'bg-blue-100 text-blue-800' : 
                                'bg-amber-100 text-amber-800'
                              }`}>
                                {item.status}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="alerts" className="mt-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-medium mb-4">Alert Preferences</h3>
                      <div className="space-y-4">
                        {[
                          { title: "Watering Reminders", description: "Get alerts when your crops need watering", enabled: true },
                          { title: "Fertilizer Application", description: "Reminders for scheduled fertilizer applications", enabled: true },
                          { title: "Weather Alerts", description: "Warnings about adverse weather conditions", enabled: true },
                          { title: "Pest & Disease Warnings", description: "Alerts about potential pest or disease outbreaks in your area", enabled: true },
                          { title: "Harvest Time Notifications", description: "Get notified when crops are approaching harvest time", enabled: true },
                          { title: "Market Price Updates", description: "Daily updates on crop prices in local markets", enabled: false },
                        ].map((alert, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <h4 className="font-medium">{alert.title}</h4>
                              <p className="text-sm text-gray-500">{alert.description}</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" defaultChecked={alert.enabled} className="sr-only peer" />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-kisan-green"></div>
                            </label>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6">
                        <h3 className="text-lg font-medium mb-4">Notification Methods</h3>
                        <div className="space-y-4">
                          {[
                            { method: "App Notifications", description: "Receive alerts within the app", enabled: true },
                            { method: "SMS Alerts", description: "Get text messages for critical alerts", enabled: true },
                            { method: "Email Digest", description: "Daily email summary of all notifications", enabled: false },
                            { method: "Voice Calls", description: "Phone calls for emergency alerts only", enabled: false },
                          ].map((method, index) => (
                            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                              <div>
                                <h4 className="font-medium">{method.method}</h4>
                                <p className="text-sm text-gray-500">{method.description}</p>
                              </div>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked={method.enabled} className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-kisan-green"></div>
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-end mt-6">
                        <Button className="kisan-btn-primary">
                          Save Preferences
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CropMonitoring;
