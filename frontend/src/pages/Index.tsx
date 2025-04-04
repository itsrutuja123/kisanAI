
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import TestimonialSection from '@/components/home/TestimonialSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <div className="container mx-auto kisan-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-kisan-green-dark mb-6">
                Plant Disease Detection
              </h2>
              <p className="text-muted-foreground mb-6">
                Simply upload a photo of your plant, and our AI will identify any diseases, provide detailed information about the condition, and recommend treatment options.
              </p>
              <ul className="space-y-3">
                {['Early detection prevents crop loss', 'Detailed treatment recommendations', 'Offline access for remote areas'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-kisan-green/10 text-kisan-green p-1 rounded-full mr-3 mt-1">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=600"
              alt="Farmer examining plant"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
        <div className="container mx-auto kisan-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=600"
              alt="Crop planning on tablet"
              className="rounded-xl shadow-lg order-2 md:order-1"
            />
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-kisan-green-dark mb-6">
                Personalized Crop Planning
              </h2>
              <p className="text-muted-foreground mb-6">
                Get a customized crop plan based on your soil conditions, local climate, and market demand. Our AI helps you optimize every stage of the growing process.
              </p>
              <ul className="space-y-3">
                {['Timely alerts for watering and fertilizing', 'Seasonal crop suggestions', 'Market-aligned harvest planning'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-kisan-green/10 text-kisan-green p-1 rounded-full mr-3 mt-1">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
