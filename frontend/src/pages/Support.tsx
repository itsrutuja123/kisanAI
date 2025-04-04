
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PhoneCall, Mail, MessageSquare, HelpCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Support = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    console.log({ name, email, message });
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto py-16 px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-kisan-green-dark mb-6">How Can We Help?</h1>
            <p className="text-lg text-gray-600">
              Our team is ready to assist you with any questions or issues you might have.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <PhoneCall className="h-8 w-8 text-kisan-green" />, title: "Call Us", content: "+91 1234 567 890", subtitle: "Available 9 AM - 6 PM, Monday to Saturday" },
              { icon: <Mail className="h-8 w-8 text-blue-500" />, title: "Email Us", content: "support@kisanai.com", subtitle: "We'll respond within 24 hours" },
              { icon: <MessageSquare className="h-8 w-8 text-amber-500" />, title: "Live Chat", content: "Chat with our team", subtitle: "Available on the app during business hours" },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-full mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-kisan-green-dark mb-2">{item.title}</h3>
                  <p className="text-lg font-medium text-gray-700 mb-2">{item.content}</p>
                  <p className="text-sm text-gray-500">{item.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-kisan-green-dark mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {[
                  { question: "How accurate is the crop recommendation?", answer: "Our AI-powered crop recommendation system has an accuracy rate of over 90%, based on soil analysis, local climate data, and current market trends." },
                  { question: "Can I use KisanAI without internet?", answer: "While many features require internet connectivity, we offer an offline mode for basic functionalities like crop calendar and previously downloaded recommendations." },
                  { question: "How do I interpret the disease detection results?", answer: "Our system provides a detailed report with disease identification, severity assessment, and recommended treatments with visual guides." },
                  { question: "Is my farm data secure?", answer: "Absolutely. We use industry-standard encryption to protect your data, and we never share your personal information without your consent." },
                  { question: "Can I connect with other farmers?", answer: "Yes! KisanAI has a community feature where you can connect with other farmers in your region to share knowledge and resources." },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-start gap-3">
                        <HelpCircle className="h-5 w-5 text-kisan-green mt-0.5" />
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-8">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-kisan-green-dark mb-6">Send Us a Message</h2>
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <Input 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Your name" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Your email address" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <Textarea 
                        id="message" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        placeholder="How can we help you?" 
                        rows={4} 
                        required 
                      />
                    </div>
                    <Button type="submit" className="kisan-btn-primary w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
