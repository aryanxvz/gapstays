"use client"
import Image from 'next/image';
import React from 'react';

export const Booking = () => {
  return (
    <section id="booking" className="bg-gray-50 py-8 sm:py-12 pb-16 sm:pb-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-4 sm:px-6">
        {/* Booking Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black pb-3 sm:pb-4">
            Booking Information
          </h2>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            Complete details for bookings and payments
          </p>
          <div className="w-12 sm:w-16 md:w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        {/* Booking Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Left Column - Bank Details */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 pb-2 border-b border-gray-200">Bank Details</h3>
            
            <div className="space-y-4 sm:space-y-6">
              {/* Account holder and account number always side by side */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs sm:text-sm">A/C Holder Name</span>
                  <span className="font-medium text-sm sm:text-base">GAPSTAYS</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs sm:text-sm">Bank Account No.</span>
                  <span className="font-medium text-sm sm:text-base">4450764390</span>
                </div>
              </div>
              
              {/* Bank name and branch name always side by side */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs sm:text-sm">Bank Name</span>
                  <span className="font-medium text-sm sm:text-base">Kotak Mahindra Bank</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs sm:text-sm">Branch Name</span>
                  <span className="font-medium text-sm sm:text-base">Viman Nagar</span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-gray-500 text-xs sm:text-sm">IFSC Code</span>
                <span className="font-medium text-sm sm:text-base">KKBK0001812</span>
              </div>
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-8 sm:mt-12 mb-4 sm:mb-6 pb-2 border-b border-gray-200">Contact Information</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col">
                <span className="text-gray-500 text-xs sm:text-sm">Email</span>
                <span className="font-medium text-sm sm:text-base break-words">gapstayspune@gmail.com</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-gray-500 text-xs sm:text-sm">Mobile No.</span>
                <span className="font-medium text-sm sm:text-base">8605551424 / 7020706851</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - QR Code */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 flex flex-col">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 pb-2 border-b border-gray-200">Scan to Connect</h3>
            
            <div className="flex-1 flex flex-col items-center justify-center py-4 sm:py-8">
              {/* Placeholder for QR code - add your actual QR component here */}
              {/* <div className="w-32 h-32 sm:w-48 sm:h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-400 text-xs">QR Code</span>
              </div> */}
              <Image 
                src={'/gapstays-qr.png'} 
                alt={'Gapstays QR Code'} 
                width={220} 
                height={200} 
                className="my-4"
              />
              <p className="mt-2 sm:mt-4 text-gray-600 text-center text-sm sm:text-base">Scan the QR code to make a payment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};