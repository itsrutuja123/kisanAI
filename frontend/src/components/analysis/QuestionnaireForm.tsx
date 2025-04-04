
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type FormValues = {
  soilType: string;
  region: string;
  rainfall: string;
  temperature: string;
  cropSeason: string;
  landSize: string;
};

const initialValues: FormValues = {
  soilType: '',
  region: '',
  rainfall: '',
  temperature: '',
  cropSeason: '',
  landSize: '',
};

type QuestionnaireFormProps = {
  onSubmit: (data: FormValues) => void;
};

const QuestionnaireForm = ({ onSubmit }: QuestionnaireFormProps) => {
  const [formData, setFormData] = useState<FormValues>(initialValues);

  const handleChange = (name: keyof FormValues, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="kisan-card p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-kisan-green-dark mb-1">Soil & Farm Details</h3>
        <p className="text-muted-foreground text-sm">
          Please provide information about your farm to get accurate crop recommendations!
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="soilType">Soil Type</Label>
            <Select
              value={formData.soilType}
              onValueChange={(value) => handleChange('soilType', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select soil type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clay">Clay Soil</SelectItem>
                <SelectItem value="sandy">Sandy Soil</SelectItem>
                <SelectItem value="loamy">Loamy Soil</SelectItem>
                <SelectItem value="silty">Silty Soil</SelectItem>
                <SelectItem value="peaty">Peaty Soil</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="region">Region/State</Label>
            <Select
              value={formData.region}
              onValueChange={(value) => handleChange('region', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="punjab">Punjab</SelectItem>
                <SelectItem value="haryana">Haryana</SelectItem>
                <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                <SelectItem value="madhya-pradesh">Madhya Pradesh</SelectItem>
                <SelectItem value="gujarat">Gujarat</SelectItem>
                <SelectItem value="maharashtra">Maharashtra</SelectItem>
                <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                <SelectItem value="karnataka">Karnataka</SelectItem>
                <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                <SelectItem value="arunachal-pradesh">Arunachal Pradesh</SelectItem>
                <SelectItem value="assam">Assam</SelectItem>
                <SelectItem value="bihar">Bihar</SelectItem>
                <SelectItem value="chhattisgarh">Chhattisgarh</SelectItem>
                <SelectItem value="goa">Goa</SelectItem>
                <SelectItem value="gujarat">Gujarat</SelectItem>
                <SelectItem value="himachal-pradesh">Himachal Pradesh</SelectItem>
                <SelectItem value="jharkhand">Jharkhand</SelectItem>
                <SelectItem value="kerala">Kerala</SelectItem>
                <SelectItem value="manipur">Manipur</SelectItem>
                <SelectItem value="meghalaya">Meghalaya</SelectItem>
                <SelectItem value="mizoram">Mizoram</SelectItem>
                <SelectItem value="nagaland">Nagaland</SelectItem>
                <SelectItem value="odisha">Odisha</SelectItem>
                <SelectItem value="rajasthan">Rajasthan</SelectItem>
                <SelectItem value="sikkim">Sikkim</SelectItem>
                <SelectItem value="telangana">Telangana</SelectItem>
                <SelectItem value="tripura">Tripura</SelectItem>
                <SelectItem value="uttarakhand">Uttarakhand</SelectItem>
                <SelectItem value="west-bengal">West Bengal</SelectItem>

              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="rainfall">Average Annual Rainfall (mm)</Label>
            <Input
              id="rainfall"
              type="number"
              placeholder="e.g., 1200"
              value={formData.rainfall}
              onChange={(e) => handleChange('rainfall', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="temperature">Average Temperature (°C)</Label>
            <Input
              id="temperature"
              type="number"
              placeholder="e.g., 28"
              value={formData.temperature}
              onChange={(e) => handleChange('temperature', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cropSeason">Crop Season</Label>
            <Select
              value={formData.cropSeason}
              onValueChange={(value) => handleChange('cropSeason', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select crop season" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kharif">Kharif (Monsoon)</SelectItem>
                <SelectItem value="rabi">Rabi (Winter)</SelectItem>
                <SelectItem value="zaid">Zaid (Summer)</SelectItem>
                <SelectItem value="annual">Annual (Year-round)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="landSize">Land Size (Acres)</Label>
            <Input
              id="landSize"
              type="number"
              placeholder="e.g., 5"
              value={formData.landSize}
              onChange={(e) => handleChange('landSize', e.target.value)}
            />
          </div>
        </div>

        <Button className="kisan-btn-primary w-full mt-8" type="submit">
          Get Recommendations!
        </Button>
      </form>
    </div>
  );
};

export default QuestionnaireForm;
