"use client"
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { TestimonialCard } from "../testimonial-card";
import { TestimonialsHeader } from "../testimonial-header";

const testimonialsData = [
  {
    imageUrl: "/avatars/Nikhil.png",
    name: "Nikhil",
    rating: 5,
    testimonial: "Overall service was good. Rooms were clean, staff was chill and friendly. Its good for Couple, keeping in mind - Lodge location is bit into public area. But it was fine. They asked Rs. 1800/- for one day."
  },
  {
    imageUrl: "/avatars/Jitendra Singh.png",
    name: "Jitendra Singh",
    rating: 5,
    testimonial: "The hotel is very awesome to stay in good budget. Breakfast is also nice. Rooms are very big and clean and higenic. There are many windows to get clean air."
  },
  {
    imageUrl: "/avatars/Adarsh Ranjan.png",
    name: "Adarsh Ranjan",
    rating: 5,
    testimonial: "Best place to stay if you are in viman nagar very good hospitality and room are pretty much clear and hygienic. Must recommended for couples nice location and high security. The rooms are as same as shown in pictures."
  },
  {
    imageUrl: "/avatars/Ishan Mahajan.png",
    name: "Ishan Mahajan",
    rating: 5,
    testimonial: "Great stay, rooms were very clean and amenities were good as well. Highly recommended."
  },
  {
    imageUrl: "/avatars/Brijesh BShetty.png",
    name: "Brijesh BShetty",
    rating: 5,
    testimonial: "My stay at the White Castle Heritage was a wonderful experience. I had to stay here for a few days and the staff and the owner of the hotel were really friendly and welcoming. I would definitely recommend this place to anyone looking for a budget stay around the viman nagar area. If I have to comeback. I would stay here for sure."
  },
  {
    imageUrl: "/avatars/Vinuth A.png",
    name: "Vinuth A",
    rating: 5,
    testimonial: "Staff from the hotel was very helpful and understanding and was always been supportive and ensured the room and washrooms were clean all the day."
  },
  {
    imageUrl: "/avatars/Piyush MilindKamble.png",
    name: "Piyush MilindKamble",
    rating: 5,
    testimonial: "The staff is well behaved. The rooms are spacious and just as shown in the image. The rooms are hygenic. The location is near to phoneix but a little hard to find, apart from that - great service."
  },
  {
    imageUrl: "/avatars/Uttam Raj.png",
    name: "Uttam Raj",
    rating: 5,
    testimonial: "Nice place, no disturbance good receptionist, neatly maintained room, bathrooms. Cost also reasonable."
  },
  {
    imageUrl: "/avatars/Rajesh Mane.png",
    name: "Rajesh Mane",
    rating: 5,
    testimonial: "Very good Hotel for corporate & long stay. Very Spacious room with dinning table & balcony. Big bathroom with Jaguar fitting and very clean. Walking distance from Phoenix Mall"
  },
];

export const Testimonials = () => {
  const [showAllMobile, setShowAllMobile] = useState(false);
  
  // On mobile, show first 3 testimonials unless "read more" is clicked
  const mobileTestimonials = showAllMobile ? testimonialsData : testimonialsData.slice(0, 3);

  return (
    <section id="reviews" className="bg-neutral-900">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl py-12 px-6 lg:py-20">
        <TestimonialsHeader />
        
        {/* Desktop/Tablet View - Always show all testimonials in columns */}
        <div className="mt-8 hidden sm:block [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Mobile View - Show limited testimonials with read more */}
        <div className="mt-8 sm:hidden space-y-4">
          {mobileTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
          
          {/* Read More/Less Button */}
          {testimonialsData.length > 3 && (
            <div className="flex justify-center pt-4">
              <button
                onClick={() => setShowAllMobile(!showAllMobile)}
                className="flex items-center gap-2 text-white bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <span>{showAllMobile ? "Show Less" : "Read More"}</span>
                {showAllMobile ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};