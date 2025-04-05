import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/components/ui/sonner';
import { Leaf, User } from 'lucide-react';

interface SignInFormProps {
  onClose?: () => void;
}

const SignInForm = ({ onClose }: SignInFormProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    country: '',
    userType: 'farmer' // default value
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, userType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store user data in localStorage
    localStorage.setItem('userData', JSON.stringify(formData));
    localStorage.setItem('isLoggedIn', 'true');
    
    // Show success toast
    toast.success('Signed in successfully!');
    
    // Navigate to dashboard
    navigate('/dashboard');
    
    // Close modal if provided
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-kisan-green-dark">Sign In</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input 
            id="name" 
            name="name" 
            placeholder="Enter your full name" 
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            placeholder="your@email.com" 
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input 
            id="phone" 
            name="phone" 
            placeholder="Your phone number" 
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input 
              id="city" 
              name="city" 
              placeholder="Your city" 
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input 
              id="state" 
              name="state" 
              placeholder="Your state" 
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Input 
            id="country" 
            name="country" 
            placeholder="Your country" 
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label>You are a:</Label>
          <RadioGroup 
            defaultValue="farmer" 
            value={formData.userType} 
            onValueChange={handleRadioChange}
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="farmer" id="farmer" />
              <Label htmlFor="farmer" className="flex items-center gap-1">
                <Leaf className="h-4 w-4 text-kisan-green" />
                Farmer
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="vendor" id="vendor" />
              <Label htmlFor="vendor" className="flex items-center gap-1">
                <User className="h-4 w-4 text-amber-500" />
                Vendor
              </Label>
            </div>
          </RadioGroup>
        </div>
        
        <Button type="submit" className="w-full kisan-btn-primary">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;
