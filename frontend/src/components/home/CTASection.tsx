
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="bg-kisan-green text-white kisan-section">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Farming using AI?</h2>
          <p className="text-lg md:text-xl mb-8 text-white/80">
            Join thousands of farmers using KisanAI to make smarter decisions, increase yields, and maximize your profits.
          </p>
          <Link to="/analysis">
            <Button className="bg-white text-kisan-green hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-lg">
              Get Started Now!
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
