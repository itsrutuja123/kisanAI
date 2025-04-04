
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden kisan-gradient-bg">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-kisan-green-dark leading-tight">
              AI-Powered <span className="text-kisan-green">Farming</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-xl">
              Revolutionize your farming with KisanAI. Get personalized crop recommendations, detect plant diseases, and access market insights - all powered by advanced AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/analysis">
                <Button className="kisan-btn-primary px-6 py-6 text-base">
                  Get Recommendations!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" className="kisan-btn-secondary px-6 py-6 text-base">
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl animate-slide-up">
            <img
              src="https://images.unsplash.com/photo-1582515073490-39981397c445?q=80&w=1000"
              alt="Farmer using technology in field"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
