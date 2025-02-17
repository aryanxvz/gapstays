import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-400 py-12">
      <div className="container max-w-6xl 2xl:max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Gapstays</h3>
            <p>
              Welcome to Gapstays, your premier destination for comfortable and affordable stays in Pune. 
              We pride ourselves on providing exceptional hospitality services and creating memorable 
              experiences for our guests.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/guest-policy" className="hover:text-orange-500 transition-colors">
                  Guest Policy
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-orange-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cancellation-policy" className="hover:text-orange-500 transition-colors">
                  Cancellation and Refund Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>
                  Gapstays, Fifth Mail, Bus Stop, SN.45/a/5/2, Nagar Rd, opp. BRT, near E-Space IT Park, 
                  Somnath Nagar, Wadgaon Sheri, Pune, Maharashtra 411014
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+918605551424" className="hover:text-orange-500 transition-colors">
                  +91 8605551424
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:gapstayspune@gmail.com" className="hover:text-orange-500 transition-colors">
                  gapstayspune@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Gapstays. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};