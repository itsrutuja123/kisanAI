
import { Camera, LineChart, Leaf, Calendar } from 'lucide-react';

const features = [
  {
    icon: <Camera className="h-10 w-10 text-kisan-green" />,
    title: 'Plant Disease Detection',
    description: 'Upload photos of your plants,leaves,fruits and get instant disease detection with remedy suggestions.',
  },
  {
    icon: <Leaf className="h-10 w-10 text-kisan-green" />,
    title: 'Crop Recommendation',
    description: 'Receive personalized crop suggestions based on your soil analysis and local climate conditions by answering few simple questions.',
  },
  {
    icon: <LineChart className="h-10 w-10 text-kisan-green" />,
    title: 'Market Trend Predictions',
    description: 'Access real-time market trends/insights to maximize your profits and plan your harvests strategically.',
  },
  {
    icon: <Calendar className="h-10 w-10 text-kisan-green" />,
    title: 'Crop Lifecycle Planner',
    description: 'Get customized alerts,notifications for watering, fertilizing, and harvesting to optimize your crop lifecycle.',
  },
];

const Features = () => {
  return (
    <section className="kisan-section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-kisan-green-dark mb-4">
            What are our Smart farming features?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            KisanAI combines cutting-edge technology with agricultural expertise to provide farmers with powerful tools for better farming decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="kisan-card p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-kisan-green/10 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-kisan-green-dark mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
