import { Check, Mail, Phone, MapPin } from "lucide-react";
import React from "react";

export const Location = () => {
  return (
    <section id="location" className="bg-neutral-900 w-full text-white py-16 px-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="mb-12">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white pb-4 text-center">Our Location</div>
          <p className="text-gray-400 mb-6 text-center">Find us in the heart of the city</p>
          <div className="w-16 sm:w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-3xl font-semibold mb-4">GAPSTAYS</h3>
            <div className="flex items-start gap-2">
              <MapPin className="text-orange-500 mt-1 flex-shrink-0 mr-1" />
              <div>
                <p className="text-gray-400">Sr.45A/2, Fifth Mail, Lane No 2</p>
                <p className="text-gray-400">Opp. Pachwa Mail Brt, Near E Space It Park</p>
                <p className="text-gray-400">Somnath Nagar, Wadgaon Sheri, Pune 14</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-gray-400">
              <Phone className="flex-shrink-0 text-orange-500 mr-1" /> 
              <a href="tel:+918605551424" className="hover:text-orange-300">
                +91 860 555 1424
              </a>
            </div>
            <div className="mt-2 flex items-center gap-2 text-gray-400">
              <Mail className="flex-shrink-0 text-orange-500 mr-1" /> 
              <a href="mailto:gapstayspune@gmail.com" className="hover:text-orange-300">
                gapstayspune@gmail.com
              </a>
            </div>
            <h4 className="mt-8 text-lg font-semibold">Nearby Attractions:</h4>
            <ul className="mt-2 text-gray-300">
              <li className="flex items-center text-gray-400 gap-3 mt-1"><Check className="text-orange-500" /> Aga Khan Palace is just 7 minutes away (2.7 km)</li>
              <li className="flex items-center text-gray-400 gap-3 mt-1"><Check className="text-orange-500" /> Pune International Airport is only 6 minutes away (3 km)</li>
              <li className="flex items-center text-gray-400 gap-3 mt-1"><Check className="text-orange-500" /> Pune Junction Train Station is 15 minutes away (7.4 km)</li>
              <li className="flex items-center text-gray-400 gap-3 mt-1"><Check className="text-orange-500" /> Phoenix Marketcity is just 2 minutes away (650 meters)</li>
            </ul>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2655905406377!2d73.92310515530022!3d18.56079009287348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c11404e5581d%3A0x5b7979cecb32726c!2sWhite%20Castle%20Heritage!5e0!3m2!1sen!2sin!4v1739788974767!5m2!1sen!2sin"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};