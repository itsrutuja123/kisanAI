
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, ShoppingBag, TrendingUp, MapPin, Filter, ArrowUpDown } from 'lucide-react';

const Marketplace = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold text-kisan-green-dark mb-2">Agricultural Marketplace</h1>
                <p className="text-gray-600">
                  Connect with buyers and sellers in your local area for the best prices.
                </p>
              </div>
              <div className="flex gap-4">
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline">
                  <ArrowUpDown className="h-4 w-4 mr-2" />
                  Sort
                </Button>
                <Button className="kisan-btn-primary">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Sell Your Crops
                </Button>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input 
                  className="pl-10 py-6 text-lg"
                  placeholder="Search crops, products, or vendors..."
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
              <div className="md:col-span-8">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Local Market Prices</CardTitle>
                    <CardDescription>
                      Current buying prices at markets near you
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { crop: "Wheat", price: "₹2,200/quintal", trend: "up", change: "+₹150", location: "Rohtak Mandi" },
                        { crop: "Rice (Basmati)", price: "₹3,800/quintal", trend: "up", change: "+₹320", location: "Karnal Mandi" },
                        { crop: "Cotton", price: "₹6,300/quintal", trend: "down", change: "-₹120", location: "Hisar Mandi" },
                        { crop: "Mustard", price: "₹5,100/quintal", trend: "up", change: "+₹280", location: "Jind Mandi" },
                        { crop: "Potato", price: "₹1,200/quintal", trend: "down", change: "-₹80", location: "Local Market" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-kisan-green/10 rounded-full flex items-center justify-center">
                              <ShoppingBag className="h-5 w-5 text-kisan-green" />
                            </div>
                            <div>
                              <h3 className="font-medium">{item.crop}</h3>
                              <div className="flex items-center text-sm text-gray-500">
                                <MapPin className="h-3 w-3 mr-1" />
                                {item.location}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">{item.price}</div>
                            <div className={`flex items-center text-sm ${
                              item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                            }`}>
                              <TrendingUp className={`h-3 w-3 mr-1 ${
                                item.trend === 'down' && 'transform rotate-180'
                              }`} />
                              {item.change} this week
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <h2 className="text-xl font-bold mb-4">Featured Market Opportunities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Organic Wheat Buyers",
                      description: "Looking for organically grown wheat. Premium prices offered.",
                      quantity: "Up to 100 quintals",
                      price: "₹2,600/quintal",
                      buyer: "Organic Foods Ltd."
                    },
                    {
                      title: "Rice Export Opportunity",
                      description: "Buying basmati rice for export markets. Quality standards apply.",
                      quantity: "Minimum 200 quintals",
                      price: "₹4,100/quintal",
                      buyer: "Global Exports Inc."
                    },
                    {
                      title: "Contract Farming - Potatoes",
                      description: "Looking for farmers to grow specific potato varieties under contract.",
                      quantity: "Any quantity",
                      price: "₹1,450/quintal guaranteed",
                      buyer: "FarmFresh Foods"
                    },
                    {
                      title: "Mustard Seeds - Premium Rates",
                      description: "Buying high oil content mustard seeds for oil production.",
                      quantity: "50-200 quintals",
                      price: "₹5,300/quintal",
                      buyer: "Healthy Oils Co."
                    }
                  ].map((item, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Quantity:</span>
                            <span className="font-medium">{item.quantity}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Price Offered:</span>
                            <span className="font-medium text-kisan-green">{item.price}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Buyer:</span>
                            <span className="font-medium">{item.buyer}</span>
                          </div>
                        </div>
                        <Button className="w-full">View Details</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div className="md:col-span-4">
                <Card className="mb-6 sticky top-24">
                  <CardHeader>
                    <CardTitle>Sell Your Crop</CardTitle>
                    <CardDescription>
                      List your produce and get the best offers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Crop Type</label>
                        <select className="w-full border-gray-300 rounded-md shadow-sm p-2">
                          <option>Select crop</option>
                          <option>Wheat</option>
                          <option>Rice</option>
                          <option>Cotton</option>
                          <option>Mustard</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Quantity (quintals)</label>
                        <Input type="number" min="1" placeholder="Enter quantity" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Expected Price (₹/quintal)</label>
                        <Input type="number" placeholder="Enter your price" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Quality Details</label>
                        <textarea 
                          className="w-full border-gray-300 rounded-md shadow-sm p-2" 
                          rows={3}
                          placeholder="Describe crop quality, moisture content, etc."
                        ></textarea>
                      </div>
                      <Button className="kisan-btn-primary w-full">List Your Crop</Button>
                    </form>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Market Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 border rounded-lg">
                        <h3 className="font-medium text-kisan-green-dark mb-1">Rice Prices Expected to Rise</h3>
                        <p className="text-sm text-gray-600">
                          Due to lower planting this season, rice prices are predicted to increase by 10-15% in the next month.
                        </p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h3 className="font-medium text-kisan-green-dark mb-1">New Cotton Export Policy</h3>
                        <p className="text-sm text-gray-600">
                          Government has eased export restrictions on cotton, which may lead to better prices for farmers.
                        </p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h3 className="font-medium text-kisan-green-dark mb-1">Organic Produce in Demand</h3>
                        <p className="text-sm text-gray-600">
                          Local buyers are offering premium prices for certified organic vegetables and grains.
                        </p>
                      </div>
                    </div>
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

export default Marketplace;
