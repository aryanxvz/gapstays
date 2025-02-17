import { JSX } from "react"
import { FaHandsWash, FaClock, FaWifi, FaTshirt, FaConciergeBell, FaSnowflake, FaUtensils, FaParking, FaCouch } from "react-icons/fa"

interface StatCard {
  value: string;
  label: string;
}

interface FeatureCard {
  title: string;
  description: string;
  icon: JSX.Element;
}

const stats: StatCard[] = [
  { value: "150+", label: "Bookings Per Month" },
  { value: "24/7", label: "Daily Service" },
  { value: "91%", label: "Positive Feedback" },
  { value: "5+", label: "Years of Experience" },
];

const features: FeatureCard[] = [
  { title: "Hygiene Plus", description: "Clean and sanitized rooms for a safe, worry-free stay.", icon: <FaHandsWash className="text-orange-500 text-2xl" /> },
  { title: "24-hour Check-in", description: "Arrive at your convenience with flexible check-in anytime.", icon: <FaClock className="text-orange-500 text-2xl" /> },
  { title: "Complimentary Wi-Fi", description: "Stay connected with high-speed internet access.", icon: <FaWifi className="text-orange-500 text-2xl" /> },
  { title: "Laundry Service", description: "Convenient laundry service available at an additional charge.", icon: <FaTshirt className="text-orange-500 text-2xl" /> },
  { title: "24/7 Room Service", description: "Get essentials delivered anytime.", icon: <FaConciergeBell className="text-orange-500 text-2xl" /> },
  { title: "Air - Conditioning", description: "Stay cool and relaxed with climate-controlled rooms.", icon: <FaSnowflake className="text-orange-500 text-2xl" /> },
  { title: "Breakfast", description: "Start your day with a fresh, wholesome meal.", icon: <FaUtensils className="text-orange-500 text-2xl" /> },
  { title: "Cozy Lounge Area", description: "Relax in a comfortable, well-lit common space.", icon: <FaCouch className="text-orange-500 text-2xl" /> },
  { title: "Secure On-Site Parking", description: "Safe and accessible parking with surveillance cameras.", icon: <FaParking className="text-orange-500 text-2xl" /> },
];

const StatBox = ({ value, label }: StatCard) => (
  <div className="bg-white p-4 lg:p-6 flex flex-col items-center justify-center shadow-sm rounded-lg">
    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500">{value}</p>
    <p className="text-sm sm:text-base text-gray-600 font-normal text-center">{label}</p>
  </div>
);

const FeatureBox = ({ title, description, icon }: FeatureCard) => (
  <div className="bg-gray-100 p-4 sm:p-6 flex flex-col items-center lg:items-start justify-center shadow-md rounded-lg hover:shadow-xl transition duration-300">
    <div className="flex items-center gap-2 sm:gap-3">
      {icon}
      <p className="text-lg sm:text-xl font-bold text-black">{title}</p>
    </div>
    <p className="text-sm text-center lg:text-start sm:text-base text-gray-600 font-normal mt-2">{description}</p>
  </div>
);

export const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-50 pt-16 sm:pt-20 md:pt-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center px-6">
        <div className="mb-8 sm:mb-12">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black pb-4 text-center">About GAPSTAYS</div>
          <div className="w-16 sm:w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="text-base sm:text-lg text-black">
            <div className="mb-2 text-center md:text-left">
              At <span className="font-semibold">GAPSTAYS</span>, we redefine hospitality by curating spaces that cater to your individuality, whether you crave solitude for deep focus or a vibrant atmosphere to spark new connections in your life. Every stay is a seamless blend of <span className="font-semibold">sophistication and warmth</span>, ensuring that wherever your journey takes you, you always feel at home.<br/>
            </div>
            <div className="text-center md:text-left">
              Our <span className="font-semibold">fully furnished, thoughtfully designed spaces</span> go beyond the ordinary, providing a sanctuary where you can <span className="font-semibold">work, unwind, and explore without compromise.</span> Elevate your travel experience with a place that isn&apos;t just somewhere to stay, it&apos;s somewhere to belong.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 bg-gray-100 p-4 sm:p-8 rounded-lg shadow-lg">
            {stats.map((stat, index) => (
              <StatBox key={index} {...stat} />
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black pb-4 text-center">Hotel Amenities</div>
          <div className="w-16 sm:w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4 rounded-lg shadow-lg mt-8 sm:mt-12 w-full">
          {features.map((feature, index) => (
            <FeatureBox key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};