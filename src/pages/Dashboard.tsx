
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DashboardOverview from '@/components/dashboard/DashboardOverview';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, Calendar, Home, LineChart, Settings, Users } from 'lucide-react';

const Dashboard = () => {
  // This is just a placeholder - in a real app, these would be fetched from your backend
  const userName = "Rajesh";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto py-8 px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-kisan-green-dark">Welcome back, {userName}!</h1>
            <p className="text-muted-foreground">Here's an overview of your farm's status and recommendations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Active Crops
                </CardTitle>
                <Seedling className="h-4 w-4 text-kisan-green" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">
                  2 ready for harvest soon
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Weather Forecast
                </CardTitle>
                <Cloud className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28°C</div>
                <p className="text-xs text-muted-foreground">
                  Sunny with light showers expected
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Upcoming Tasks
                </CardTitle>
                <Calendar className="h-4 w-4 text-amber-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  1 task due today
                </p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview">
                <Home className="h-4 w-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="crops">
                <Seedling className="h-4 w-4 mr-2" />
                Crops
              </TabsTrigger>
              <TabsTrigger value="market">
                <LineChart className="h-4 w-4 mr-2" />
                Market
              </TabsTrigger>
              <TabsTrigger value="alerts">
                <Bell className="h-4 w-4 mr-2" />
                Alerts
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <DashboardOverview />
            </TabsContent>
            
            <TabsContent value="crops">
              <Card>
                <CardHeader>
                  <CardTitle>Crop Management</CardTitle>
                  <CardDescription>
                    Manage all your crops and get detailed insights for each.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground py-12">
                    This feature will be available in the next update.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="market">
              <Card>
                <CardHeader>
                  <CardTitle>Market Analysis</CardTitle>
                  <CardDescription>
                    View detailed market trends and price predictions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground py-12">
                    This feature will be available in the next update.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="alerts">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications & Alerts</CardTitle>
                  <CardDescription>
                    Manage your notification preferences and view past alerts.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground py-12">
                    This feature will be available in the next update.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Import necessary components that are used in this file
import { Seedling, Cloud } from 'lucide-react';

export default Dashboard;
