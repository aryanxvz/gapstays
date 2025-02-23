"use client"
import { JSX, useState } from "react";
import { FaClock, FaWifi, FaConciergeBell, FaBroom, FaSoap, FaWind, FaMugHot, FaBed, FaTint, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface FeatureCard {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: FeatureCard[] = [
  { title: "Hygiene Plus", description: "Clean and sanitized rooms for a safe, worry-free stay.", icon: <FaBroom className="text-orange-500 text-2xl" /> },
  { title: "24/7 Check-in", description: "Flexible check-in anytime for your convenience.", icon: <FaClock className="text-orange-500 text-2xl" /> },
  { title: "Fast Wi-Fi", description: "Enjoy seamless high-speed internet access.", icon: <FaWifi className="text-orange-500 text-2xl" /> },
  { title: "Laundry Service", description: "Convenient laundry service available at an additional charge.", icon: <FaSoap className="text-orange-500 text-2xl" /> },
  { title: "24/7 Room Service", description: "Get essentials delivered anytime.", icon: <FaConciergeBell className="text-orange-500 text-2xl" /> },
  { title: "Air Conditioning", description: "Stay cool with fully air-conditioned rooms.", icon: <FaWind className="text-orange-500 text-2xl" /> },
  { title: "Breakfast", description: "Start your day with a fresh and delicious meal.", icon: <FaMugHot className="text-orange-500 text-2xl" /> },
  { title: "Comfortable Queen Bed", description: "Relax and unwind on a plush queen-size bed.", icon: <FaBed className="text-orange-500 text-2xl" /> },
  { title: "Free Water Bottles", description: "Stay hydrated with complimentary bottled water.", icon: <FaTint className="text-orange-500 text-2xl" /> },
];

const FeatureBox = ({ title, description, icon }: FeatureCard) => (
  <div className="bg-gray-100 p-4 sm:p-6 flex flex-col items-center lg:items-start justify-center shadow-md rounded-lg hover:scale-105 transition duration-200">
    <div className="flex items-center gap-2 sm:gap-3">
      {icon}
      <p className="text-lg sm:text-xl font-bold text-black">{title}</p>
    </div>
    <p className="text-sm text-center lg:text-start sm:text-base text-gray-600 font-normal mt-2">{description}</p>
  </div>
);

const roomImages = [
  "/images/room1.jpg",
  "/images/room2.jpg",
  "/images/room3.jpg"
];

const RoomCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % roomImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + roomImages.length) % roomImages.length);

  return (
    <div className="relative w-full max-w-6xl 2xl:max-w-7xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <img src={roomImages[currentImage]} alt="Room" className="w-full h-80 object-cover transition duration-500" />
      <button onClick={prevImage} className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
        <FaChevronLeft className="text-xl" />
      </button>
      <button onClick={nextImage} className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
        <FaChevronRight className="text-xl" />
      </button>
    </div>
  );
};

export const Rooms = () => {
  return (
    <section id="rooms" className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl py-12 px-6 lg:py-28">

        {/* Room Description Section */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Our Rooms</h2>
          <p className="text-gray-300 text-lg sm:text-xl mt-3">Spacious & comfortable stay for two guests</p>
          <div className="w-16 sm:w-20 h-1 bg-orange-500 mx-auto my-4 mb-8"></div>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Experience luxury with our <span className="text-orange-400 font-semibold">250 sq. ft.</span> room, featuring a 
            <span className="text-orange-400 font-semibold"> queen-size bed</span>, a private bathroom, and modern amenities.
          </p>
        </div>

        {/* Room Image Carousel */}
        <div className="mt-8">
          <RoomCarousel />
        </div>

        {/* Hotel Amenities Section */}
        <div className="mt-16">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Hotel Amenities</div>
          <div className="w-16 sm:w-20 h-1 bg-orange-500 mx-auto"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 rounded-lg mt-8 sm:mt-12 w-full">
            {features.map((feature, index) => (
              <FeatureBox key={index} {...feature} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
