import { StarRating } from "./star-rating";
import Image from 'next/image';

interface TestimonialCardProps {
  imageUrl: string;
  name: string;
  rating: number;
  testimonial: string;
}

export const TestimonialCard = ({ imageUrl, name, rating, testimonial }: TestimonialCardProps) => {
  return (
    <div className="mb-8 sm:break-inside-avoid">
      <blockquote className="rounded-lg bg-gray-100 hover:scale-105 duration-400 transition-all p-6 shadow-xs sm:p-8">
        <div className="flex items-center gap-4">
          <div className="relative size-12 rounded-full overflow-hidden">
            <Image 
              alt={name} 
              src={imageUrl} 
              fill 
              sizes="48px"
              className="object-cover" 
            />
          </div>
          <div>
            <StarRating rating={rating} />
            <p className="mt-0.5 text-lg font-medium text-gray-900">{name}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700">{testimonial}</p>
      </blockquote>
    </div>
  );
};