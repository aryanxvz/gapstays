"use client"
import React from 'react';

interface PolicySection {
  title: string;
  items: PolicyItem[];
}

interface PolicyItem {
  heading: string;
  points: string[];
  bulletStyle?: 'number' | 'bullet' | 'none';
}

const policySections: PolicySection[] = [
  {
    title: "Cancellation Policy",
    items: [
      {
        heading: "Booking Cancellation:",
        points: ["You may cancel your booking via the Gapstays website or mobile app."],
        bulletStyle: 'number'
      },
      {
        heading: "Refunds:",
        points: [
          "Any applicable refund will be processed within 7-14 working days.",
          "If the cancellation amount exceeds the payment made, the difference may be debited from your Gapstays Wallet balance."
        ],
        bulletStyle: 'bullet'
      }
    ]
  },
  {
    title: "Unmarried Couples and Local ID Policy",
    items: [
      {
        heading: "",
        points: [
          "Gapstays Hotel may have restrictions on bookings from unmarried couples or those with local ID proofs.",
          "Such policies will be clearly communicated during the booking process.",
          "Note: If a booking is denied by the hotel due to these policies, no refund will be issued."
        ],
        bulletStyle: 'bullet'
      }
    ]
  },
  {
    title: "Check-in Denial Policy",
    items: [
      {
        heading: "Gapstays Hotels reserve the right to deny check-in in the following circumstances:",
        points: [
          "If guests fail to provide a valid government-issued photo ID.",
          "If minor guests are unaccompanied by a guardian.",
          "If the hotel deems the guest's check-in suspicious or inappropriate."
        ],
        bulletStyle: 'number'
      },
      {
        heading: "",
        points: ["In such cases, Gapstays Hotel will not be liable to provide a refund."],
        bulletStyle: 'none'
      }
    ]
  }
];

const PolicyItem = ({ item }: { item: PolicyItem }) => {
  return (
    <div className="mb-4">
      {item.heading && (
        <h3 className="text-base sm:text-lg font-semibold mb-2">{item.heading}</h3>
      )}
      <ul className={`pl-5 ${item.bulletStyle === 'none' ? 'list-none pl-0' : ''}`}>
        {item.points.map((point, index) => (
          <li 
            key={index}
            className={`mb-2 ${
              item.bulletStyle === 'number' 
                ? 'list-decimal' 
                : item.bulletStyle === 'bullet' 
                  ? 'list-disc' 
                  : ''
            }`}
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

const PolicySection = ({ section }: { section: PolicySection }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">{section.title}</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {section.items.map((item, index) => (
          <PolicyItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export const Policies = () => {
  return (
    <section id="policies" className="bg-gray-50 pt-16 sm:pt-20 pb-28 scroll-mt-16">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col items-center px-6">
        <div className="mb-8 sm:mb-12">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black pb-4 text-center">Policies</div>
          <div className="w-16 sm:w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="w-full">
          {policySections.map((section, index) => (
            <PolicySection key={index} section={section} />
          ))}
        </div>

        <div className="mt-8 p-4 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
          <p className="text-base text-gray-700">
            <span className="font-semibold">Note:</span> These policies are subject to change. We recommend reviewing the most up-to-date policies at the time of your booking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Policies;