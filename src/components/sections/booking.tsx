"use client"
import React from 'react';

export const Booking = () => {
  return (
    <section id="booking" className="bg-gray-50 py-12 pb-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-4 sm:px-6">
        {/* Booking Header */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black pb-4">
            Booking Information
          </h2>
          <p className="text-gray-600 mb-6">
            Complete details for bookings and payments
          </p>
          <div className="w-16 sm:w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        {/* Booking Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Bank Details */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Bank Details</h3>
            
            <div className="space-y-6">
              {/* Account holder and account number side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">A/C Holder Name</span>
                  <span className="font-medium">GAPSTAYS</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Bank Account No.</span>
                  <span className="font-medium">4450764390</span>
                </div>
              </div>
              
              {/* Branch name and bank name side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Bank Name</span>
                  <span className="font-medium">Kotak Mahindra Bank</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Branch Name</span>
                  <span className="font-medium">Viman Nagar</span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">IFSC Code</span>
                <span className="font-medium">KKBK0001812</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mt-12 mb-6 pb-2 border-b border-gray-200">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">Email</span>
                <span className="font-medium">gapstayspune@gmail.com</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">Mobile No.</span>
                <span className="font-medium">8605551424 / 7020706851</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - QR Code */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col">
            <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Scan to Connect</h3>
            
            <div className="flex-1 flex flex-col items-center justify-center">
              <p className="mt-4 text-gray-600 text-center">Scan the QR code to make a payment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};