
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Leaf, Zap, Globe, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto py-16 px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-kisan-green-dark mb-6">About KisanAI</h1>
            <p className="text-lg text-gray-600">
              KisanAI is revolutionizing agriculture by combining cutting-edge AI technology with time-tested farming wisdom.
              Our mission is to empower farmers with tools that make sustainable and profitable farming accessible to all.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <img 
              src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=800" 
              alt="Farmers using technology" 
              className="rounded-xl shadow-lg h-auto object-cover"
            />
            <div>
              <h2 className="text-3xl font-bold text-kisan-green-dark mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2025, KisanAI began with a simple idea: what if we could give farmers the power of AI while respecting their traditional knowledge?
              </p>
              <p className="text-gray-600 mb-6">
                Our team of agricultural experts and technology specialists worked alongside farmers to build an AI platform that addresses real farming challenges - from crop selection to disease management and market access.
              </p>
              <p className="text-gray-600">
                Today, KisanAI serves thousands of farmers across the country, helping them increase yields, reduce costs, and farm more sustainably.
              </p>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-kisan-green-dark text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: <Leaf className="h-12 w-12 text-kisan-green" />, title: "Sustainability", description: "We're committed to promoting sustainable farming practices that protect our soil and environment for future generations." },
              { icon: <Zap className="h-12 w-12 text-amber-500" />, title: "Innovation", description: "We constantly explore new technologies and approaches to solve age-old farming challenges." },
              { icon: <Globe className="h-12 w-12 text-blue-500" />, title: "Accessibility", description: "We believe advanced farming tools should be accessible to farmers of all sizes and backgrounds." },
              { icon: <Users className="h-12 w-12 text-purple-500" />, title: "Community", description: "We're building a community where farmers can share knowledge and support each other." },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-kisan-green-dark mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-kisan-green/10 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-kisan-green-dark mb-6">Join the Agricultural Revolution</h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're a small-scale farmer or manage vast agricultural operations, KisanAI is designed to meet your unique needs and help you thrive in today's challenging agricultural landscape.
              </p>
              <button className="kisan-btn-primary px-8 py-3 text-lg font-medium">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
