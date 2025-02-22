import { JSX } from "react"
import { FaClock, FaWifi, FaConciergeBell, FaBroom, FaSoap, FaWind, FaMugHot, FaBed, FaTint } from "react-icons/fa"

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

export const Rooms = () => {
  return (
    <section id="rooms" className="bg-neutral-900">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl py-12 px-6 lg:py-28">
        <div className="">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white pb-4 text-center">Hotel Amenities</div>
          <div className="w-16 sm:w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 rounded-lg mt-8 sm:mt-12 w-full">
          {features.map((feature, index) => (
            <FeatureBox key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}