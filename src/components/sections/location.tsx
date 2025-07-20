"use client"
import { Check, Mail, Phone, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Can we book your hotel on an hourly basis?",
    answer: "Yes, we offer hourly bookings. We are one of the best hotels in Viman Nagar, Pune for short stays."
  },
  {
    question: "Is your hotel a budget hotel in Viman Nagar, Pune?",
    answer: "Yes, our hotel is known as a budget-friendly option in Viman Nagar, Pune. Many of our guests consider us one of the top budget hotels in the area."
  },
  {
    question: "Is your hotel near Viman Nagar, Pune?",
    answer: "Yes, our hotel is situated within Viman Nagar, right off the main highway for easy access."
  },
  {
    question: "Is your hotel couple-friendly?",
    answer: "Yes, we are a couple-friendly hotel in Viman Nagar, Pune, and we ensure a safe and comfortable stay for all our guests."
  },
  {
    question: "Is yours the best lodge in Viman Nagar, Pune?",
    answer: "Yes, we take pride in being one of the best lodges in Viman Nagar, Pune, offering great service and affordable rates."
  },
  {
    question: "Is your hotel one of the cheap hotels in Viman Nagar, Pune?",
    answer: "Yes, our hotel is among the most affordable options in Viman Nagar, Pune, without compromising on comfort."
  },
  {
    question: "Is your hotel near Kalyani Nagar, Viman Nagar, Pune?",
    answer: "Yes, our hotel is very close to Kalyani Nagar, making it convenient for travelers visiting either area."
  },
  {
    question: "Is your hotel near Wadgaon Sheri, Pune?",
    answer: "Yes, our hotel is located near Wadgaon Sheri—just a short walking distance away."
  }
];

const FAQItem = ({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-4 px-6 text-left flex justify-between items-center hover:bg-neutral-800 transition-colors duration-200"
      >
        <span className="text-white font-medium pr-4">{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="text-orange-500 flex-shrink-0 w-5 h-5" />
        ) : (
          <ChevronDown className="text-orange-500 flex-shrink-0 w-5 h-5" />
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}>
        <div className={`px-6 pb-4 transition-opacity duration-200 ${isOpen ? "opacity-100 delay-100" : "opacity-0"}`}>
          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

export const Location = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="location" className="bg-neutral-900 w-full text-white pt-20 pb-24 px-4">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6">

        <div className="mb-12">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white pb-4 text-center">Our Location</div>
          <p className="text-gray-400 mb-6 text-center">Find us in the heart of the city</p>
          <div className="w-16 sm:w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl 2xl:max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start mb-16 md:mb-24">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-3xl font-semibold mb-4 text-center md:text-start">GAPSTAYS</h3>
            
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center md:items-start gap-2">
                <MapPin className="text-orange-500 mt-1 flex-shrink-0 mr-1" />
                <div className="text-center md:text-start">
                  <p className="text-gray-400">S.N. 45/A/5/2, Fifth Mail Bus Stop, Nagar Road</p>
                  <p className="text-gray-400">Opp. Pachwa Mail Brt, Near E-Space IT Park</p>
                  <p className="text-gray-400">Somnath Nagar, Wadgaon Sheri, Pune, Maharashtra 411014</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-gray-400">
                <Phone className="flex-shrink-0 text-orange-500 mr-1" /> 
                <a href="tel:+918605551424" className="hover:text-orange-400">
                  +91 860 555 1424
                </a>
              </div>

              <div className="mt-2 flex items-center gap-2 text-gray-400">
                <Mail className="flex-shrink-0 text-orange-500 mr-1" /> 
                <a href="mailto:gapstayspune@gmail.com" className="hover:text-orange-400">
                  gapstayspune@gmail.com
                </a>
              </div>

              <h4 className="mt-8 text-lg font-semibold text-center md:text-start">Nearby Attractions:</h4>
              <ul className="mt-2 text-gray-300 flex flex-col items-center md:items-start px-6 md:px-0">
                <li className="flex items-center text-gray-400 gap-3 mt-1 text-center md:text-start">
                  <Check className="text-orange-500 hidden md:block" /> 
                  Aga Khan Palace is just 7 minutes away (2.7 km)
                </li>
                <li className="flex items-center text-gray-400 gap-3 mt-1 text-center md:text-start">
                  <Check className="text-orange-500 hidden md:block" /> 
                  Pune International Airport is only 6 minutes away (3 km)
                </li>
                <li className="flex items-center text-gray-400 gap-3 mt-1 text-center md:text-start">
                  <Check className="text-orange-500 hidden md:block" /> 
                  Pune Junction Train Station is 15 minutes away (7.4 km)
                </li>
                <li className="flex items-center text-gray-400 gap-3 mt-1 text-center md:text-start">
                  <Check className="text-orange-500 hidden md:block" /> 
                  Phoenix Marketcity is just 2 minutes away (650 meters)
                </li>
              </ul>
            </div>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.39312075199987!2d73.92292947237821!3d18.56096309281227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c17db0fb16d3%3A0x78f10a8063f5d042!2sGapstays!5e0!3m2!1sen!2sin!4v1753012870654!5m2!1sen!2sin"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white pb-4">Frequently Asked Questions</div>
            <p className="text-gray-400 mb-6">Get answers to common questions about our hotel</p>
            <div className="w-16 sm:w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="bg-neutral-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openFAQ === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};