import { useState } from 'react';
import { Calendar, Droplet, LineChart, Sprout, ShoppingBag, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

// Sample data
const currentCrops = [
  {
    name: 'Wheat',
    stage: 'Growing',
    progress: 65,
    nextAction: 'Fertilize in 3 days',
    imageUrl: 'images/wheat.avif',
  },
  {
    name: 'Tomatoes',
    stage: 'Fruiting',
    progress: 80,
    nextAction: 'Harvest in 10 days',
    imageUrl: 'images/tomato.webp',
  },
  {
    name: 'Sunflower',
    stage: 'Flowering',
    progress: 70,
    nextAction: 'Monitor for pests in 2 days',
    imageUrl: 'images/sunflower.jpg', 
  },
  {
    name: 'Rice',
    stage: 'Seedling',
    progress: 30,
    nextAction: 'Apply fertilizer in 7 days',
    imageUrl: 'images/rice.webp', 
  },
];

const marketTrends = [
  { crop: 'Wheat', trend: 'up', price: '₹2,100/q', change: '+4.5%' },
  { crop: 'Rice', trend: 'down', price: '₹3,200/q', change: '-2.1%' },
  { crop: 'Tomatoes', trend: 'up', price: '₹25/kg', change: '+12.3%' },
];

const DashboardOverview = () => {
  const [showAllCrops, setShowAllCrops] = useState(false);
  const [completedTasks, setCompletedTasks] = useState<{[key: string]: boolean}>({});
  
  const displayedCrops = showAllCrops ? currentCrops : currentCrops.slice(0, 2);
  
  const handleMarkDone = (taskId: string) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: true
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left column - Current Crops */}
      <div className="md:col-span-2 space-y-6">
        <div className="kisan-card p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-kisan-green-dark">Current Crops</h3>
            <Button 
              variant="outline" 
              className="text-sm"
              onClick={() => setShowAllCrops(!showAllCrops)}
            >
              {showAllCrops ? 'Show Less' : 'View All'}
            </Button>
          </div>

          <div className="space-y-6">
            {displayedCrops.map((crop, index) => (
              <div key={index} className="flex gap-4 items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <img
                  src={crop.imageUrl}
                  alt={crop.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-kisan-green-dark">{crop.name}</h4>
                    <span className="text-xs bg-kisan-green/10 text-kisan-green px-2 py-1 rounded-full">
                      {crop.stage}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>Progress</span>
                      <span>{crop.progress}%</span>
                    </div>
                    <Progress value={crop.progress} className="h-2" />
                    <div className="flex items-center text-xs mt-2 text-kisan-brown">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{crop.nextAction}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="kisan-card p-6">
          <h3 className="text-xl font-semibold text-kisan-green-dark mb-4">Upcoming Tasks</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Droplet className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="font-medium">Water Tomatoes</p>
                  <p className="text-xs text-muted-foreground">Today</p>
                </div>
              </div>
              {completedTasks['water-tomatoes'] ? (
                <Button variant="outline" size="sm" className="bg-green-100 text-green-600 border-green-200">
                  <Check className="h-4 w-4" />
                </Button>
              ) : (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleMarkDone('water-tomatoes')}
                >
                  Mark Done
                </Button>
              )}
            </div>
            
            <div className="flex justify-between items-center p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <Sprout className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="font-medium">Apply Fertilizer to Wheat</p>
                  <p className="text-xs text-muted-foreground">Tomorrow</p>
                </div>
              </div>
              {completedTasks['fertilize-wheat'] ? (
                <Button variant="outline" size="sm" className="bg-green-100 text-green-600 border-green-200">
                  <Check className="h-4 w-4" />
                </Button>
              ) : (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleMarkDone('fertilize-wheat')}
                >
                  Mark Done
                </Button>
              )}
            </div>
            
            <div className="flex justify-between items-center p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-100 rounded-full">
                  <ShoppingBag className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <p className="font-medium">Buy Tomato Seeds</p>
                  <p className="text-xs text-muted-foreground">In 5 days</p>
                </div>
              </div>
              {completedTasks['buy-tomato-seeds'] ? (
                <Button variant="outline" size="sm" className="bg-green-100 text-green-600 border-green-200">
                  <Check className="h-4 w-4" />
                </Button>
              ) : (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleMarkDone('buy-tomato-seeds')}
                >
                  Mark Done
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right column - Market Trends & Weather */}
      <div className="space-y-6">
        <div className="kisan-card p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-kisan-green-dark">Market Trends</h3>
            <LineChart className="h-5 w-5 text-kisan-green" />
          </div>
          
          <div className="space-y-4">
            {marketTrends.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                <span className="font-medium">{item.crop}</span>
                <div>
                  <span className="font-medium mr-2">{item.price}</span>
                  <span className={item.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                    {item.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <Button variant="outline" className="w-full mt-4">View Full Market Report</Button>
        </div>

        <div className="kisan-card p-6">
          <h3 className="text-xl font-semibold text-kisan-green-dark mb-4">Recommended Seeds</h3>
          
          <div className="space-y-3">
            <div className="p-3 border rounded-lg flex gap-3">
              <img
                src="images/wheatseeds.webp"
                alt="Rice Seeds"
                className="w-12 h-12 rounded object-cover"
              />
              <div>
                <p className="font-medium">Hybrid Rice Seeds</p>
                <p className="text-xs text-muted-foreground">Best for your soil type</p>
                <p className="text-sm text-kisan-green font-semibold mt-1">₹240/kg</p>
              </div>
            </div>
            
            <div className="p-3 border rounded-lg flex gap-3">
              <img
                src="images/cornseeds.jpg"
                alt="Corn Seeds"
                className="w-12 h-12 rounded object-cover"
              />
              <div>
                <p className="font-medium">Sweet Corn Seeds</p>
                <p className="text-xs text-muted-foreground">High yield variety</p>
                <p className="text-sm text-kisan-green font-semibold mt-1">₹320/kg</p>
              </div>
            </div>
          </div>
          
          <Button className="kisan-btn-primary w-full mt-4">Shop Seeds</Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;