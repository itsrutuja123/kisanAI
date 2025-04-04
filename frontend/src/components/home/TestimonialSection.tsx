
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Punjab, India',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'KisanAI helped me identify a disease in my wheat crop before it spread. The early detection saved me from a potential 40% loss in yield.',
  },
  {
    name: 'Anita Patel',
    location: 'Gujarat, India',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'The crop recommendation feature suggested I try growing cumin, which was perfect for my soil. My profits increased by 30% compared to last year.',
  },
  {
    name: 'Suresh Reddy',
    location: 'Telangana, India',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
    text: 'Market trend predictions helped me time my harvest perfectly. I sold my produce when prices were at their peak.',
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-kisan-beige kisan-section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-kisan-green-dark mb-4">
            What Farmers Say about KisanAI?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from farmers who have transformed their agriculture practices with KisanAI.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <Quote className="absolute text-kisan-green/10 h-24 w-24 -top-6 -left-6" />
            
            <div className="text-lg md:text-xl text-foreground/80 mb-8 relative z-10">
              "{testimonials[currentIndex].text}"
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-kisan-green-dark">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full hover:bg-kisan-green/10 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="h-5 w-5 text-kisan-green-dark" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full hover:bg-kisan-green/10 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="h-5 w-5 text-kisan-green-dark" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
