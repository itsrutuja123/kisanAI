
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DashboardOverview from '@/components/dashboard/DashboardOverview';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, Calendar, Home, LineChart, Leaf, Droplets, ShoppingBag, User } from 'lucide-react';

const Dashboard = () => {
  // This is just a placeholder - in a real app, these would be fetched from your backend
  const userName = "Rajesh";
  
  // Dashboard feature navigation items
  const dashboardFeatures = [
    {
      icon: <Leaf className="h-10 w-10 text-kisan-green" />,
      title: "Crop Recommendation",
      description: "Get personalized crop suggestions based on soil analysis",
      link: "/crop-recommendation"
    },
    {
      icon: <Bell className="h-10 w-10 text-red-500" />,
      title: "Disease Detection",
      description: "Identify plant diseases and get treatment suggestions",
      link: "/disease-detection"
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-amber-500" />,
      title: "Marketplace",
      description: "Connect with local vendors and sell your crops at best prices",
      link: "/marketplace"
    },
    {
      icon: <Droplets className="h-10 w-10 text-blue-500" />,
      title: "Crop Monitoring",
      description: "Get timely alerts for watering, fertilizing and harvesting",
      link: "/crop-monitoring"
    },
    {
      icon: <User className="h-10 w-10 text-gray-600" />,
      title: "Your Profile",
      description: "Manage your personal information and preferences",
      link: "/profile"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto py-8 px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-kisan-green-dark">Welcome back, {userName}!</h1>
            <p className="text-muted-foreground">Here's an overview of your farm's status and recommendations.</p>
          </div>

          {/* Dashboard Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {dashboardFeatures.map((feature, index) => (
              <Link to={feature.link} key={index} className="block">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-gray-100 p-3 rounded-full">{feature.icon}</div>
                    <div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-kisan-green-dark mb-4">Farm Overview</h2>
            <DashboardOverview />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
