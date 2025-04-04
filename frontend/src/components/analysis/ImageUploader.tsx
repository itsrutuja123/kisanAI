
import { useState } from 'react';
import { Camera, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ImageUploaderProps = {
  title: string;
  description: string;
  onImageSelected: (file: File) => void;
};

const ImageUploader = ({ title, description, onImageSelected }: ImageUploaderProps) => {
  const [image, setImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
      onImageSelected(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setImage(URL.createObjectURL(file));
      onImageSelected(file);
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  return (
    <div className="kisan-card p-6">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-kisan-green-dark mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>

      {!image ? (
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center ${
            isDragging ? 'border-kisan-green bg-kisan-green/5' : 'border-gray-300'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Camera className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-sm text-gray-500 mb-4">
            Drag and drop your image here, or click to select
          </p>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id={`file-upload-${title}`}
            onChange={handleImageChange}
          />
          <label htmlFor={`file-upload-${title}`}>
            <Button className="kisan-btn-primary" type="button">
              <Upload className="mr-2 h-4 w-4" />
              Upload Image
            </Button>
          </label>
        </div>
      ) : (
        <div className="relative">
          <img src={image} alt="Uploaded" className="w-full h-auto rounded-lg" />
          <button
            onClick={removeImage}
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"
            aria-label="Remove image"
          >
            <X className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
