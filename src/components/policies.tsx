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

// Reordered and expanded policy sections
const policySections: PolicySection[] = [
  {
    title: "Privacy Policy",
    items: [
      {
        heading: "Information We Collect:",
        points: [
          "Personal details including name, email address, phone number, mailing address, payment information, and identification documents required for verification purposes.",
          "Automatic data such as device information, IP address, browser type, operating system, browsing behavior, location data, and other technical information collected through cookies and similar technologies."
        ],
        bulletStyle: 'bullet'
      },
      {
        heading: "How We Collect Information:",
        points: [
          "Direct submission through registration forms, booking processes, customer service interactions, surveys, and when you communicate with us through any of our channels.",
          "Automated tracking technologies when using our website, mobile application, and other digital platforms to enhance your experience and optimize our services."
        ],
        bulletStyle: 'bullet'
      },
      {
        heading: "Purpose of Collection:",
        points: [
          "Processing bookings and reservations to facilitate your stay, including confirmation, modifications, and special requests handling.",
          "Customer support and communication to address inquiries, resolve issues, and deliver important updates regarding your booking or our services.",
          "Marketing and service improvements through analyzing usage patterns, preferences, and feedback to enhance your experience and personalize our offerings.",
          "Legal compliance and security measures to fulfill regulatory requirements, prevent fraud, verify identity, and ensure the safety of all guests and our properties."
        ],
        bulletStyle: 'bullet'
      },
      {
        heading: "Use of Cookies and Tracking Technologies:",
        points: [
          "Enhances personalization and user experience by remembering your preferences, login details, and previous interactions to provide seamless navigation and relevant content.",
          "Helps improve services and perform analytics by collecting anonymous statistical data about website usage, popular features, and potential areas for improvement to better meet your needs."
        ],
        bulletStyle: 'bullet'
      },
      {
        heading: "Sharing of Information:",
        points: [
          "Trusted partners and service providers including payment processors, booking engines, customer support tools, and marketing platforms that help us deliver our services efficiently.",
          "Legal authorities when required by law, regulation, legal process, or enforceable governmental request to comply with our legal obligations.",
          "Business transactions in cases of mergers, acquisitions, or reorganizations where your data may be transferred as part of Gapstays' assets but will remain subject to the same privacy protections."
        ],
        bulletStyle: 'bullet'
      },
      {
        heading: "Data Retention:",
        points: [
          "Information is retained only as long as necessary to fulfill the purposes outlined in this policy or as required by applicable laws and regulations.",
          "Deleted or anonymized when no longer required for business purposes, with secure deletion methods employed to protect your privacy even after your relationship with us ends."
        ],
        bulletStyle: 'bullet'
      },
      {
        heading: "Your Rights:",
        points: [
          "Access, correct, delete, or limit use of your personal data through your account settings or by contacting our privacy team directly via the contact information provided.",
          "Withdraw consent for certain data processing activities at any time, though this may impact our ability to provide specific services or features that rely on this information."
        ],
        bulletStyle: 'bullet'
      },
      {
        heading: "Security Measures:",
        points: [
          "Industry-standard protections implemented to safeguard data including encryption, access controls, regular security assessments, and employee training on privacy and security practices.",
          "No system is completely secure; we continuously improve our protocols and promptly address any vulnerabilities while maintaining transparency about potential incidents affecting your data."
        ],
        bulletStyle: 'bullet'
      },
      {
        heading: "Third-Party Links:",
        points: [
          "Our website may contain links to external sites with different privacy practices including social media platforms, partner websites, and payment processors that operate independently from Gapstays.",
          "We are not responsible for third-party privacy policies and encourage you to review their privacy statements before providing any personal information through these external channels."
        ],
        bulletStyle: 'bullet'
      },
      {
        heading: "Updates to This Policy:",
        points: [
          "Policy may be updated periodically to reflect changes in practices, services, or applicable regulations to ensure continued transparency about how we handle your information.",
          "Significant changes will be communicated via our website, email notifications, or app alerts, giving you ample time to review modifications before they take effect."
        ],
        bulletStyle: 'bullet'
      }
    ]
  },
  {
    title: "Cancellation Policy",
    items: [
      {
        heading: "Booking Cancellation:",
        points: [
          "You may cancel your booking via the Gapstays website or mobile app by accessing your reservation details and selecting the cancellation option. Our system will immediately process your request and provide a cancellation reference number for your records."
        ],
        bulletStyle: 'number'
      },
      {
        heading: "Refunds:",
        points: [
          "Any applicable refund will be processed within 7-14 working days depending on your payment method and financial institution's processing timeframes. Credit card refunds typically appear faster than bank transfers or digital wallets.",
          "If the cancellation amount exceeds the payment made, the difference may be debited from your Gapstays Wallet balance. In case your wallet has insufficient funds, you will be prompted to make an additional payment to cover the outstanding amount."
        ],
        bulletStyle: 'bullet'
      },
      {
        heading: "Cancellation Timeframes:",
        points: [
          "Free cancellation available up to 48 hours before check-in for most standard bookings, subject to property-specific policies displayed during the booking process.",
          "Cancellations within 48 hours of check-in may incur charges of up to 100% of the first night's stay, depending on the property's individual policy.",
          "Special promotions, discounted rates, and peak season bookings may have stricter cancellation terms clearly indicated during the reservation process."
        ],
        bulletStyle: 'bullet'
      },
      {
        heading: "Modifications:",
        points: [
          "Booking modifications such as date changes or room upgrades are subject to availability and may result in rate adjustments based on current pricing.",
          "Shortening your stay after the modification deadline may be treated as a partial cancellation and subject to the property's cancellation penalties."
        ],
        bulletStyle: 'bullet'
      }
    ]
  },
  {
    title: "Gapstays Hotel Guest Policy",
    items: [
      {
        heading: "Check-in & Age Requirement:",
        points: [
          "Primary guests must be 18+ with a valid government-issued photo ID (Aadhar, Driving License, Voter ID, Passport). All original documents must be presented at check-in for verification.",
          "PAN cards are not accepted as valid ID proof as they do not contain address information required for guest registration under local regulations.",
          "Standard check-in time is 12:00 PM across most Gapstays properties, though this may vary by location and will be clearly indicated in your booking confirmation."
        ],
        bulletStyle: 'bullet'
      },
      {
        heading: "Early Check-in & Late Check-out:",
        points: [
          "Early check-in (before 10 AM) may incur additional charges based on availability, typically calculated at 25-50% of the daily room rate depending on the exact arrival time.",
          "Late check-out after 11 AM may incur charges of approximately 25% of the daily rate until 2 PM, 50% until 5 PM, and after 5 PM, a full day's rate applies to compensate for the inability to prepare the room for incoming guests."
        ],
        bulletStyle: 'bullet'
      },
      {
        heading: "Visitors & Occupancy:",
        points: [
          "Visitors are allowed between 10 AM – 8 PM; no overnight stays permitted for unregistered guests. All visitors must present ID at reception and register their details for security purposes.",
          "Triple occupancy may be allowed with an extra mattress (additional fees apply, typically 25-30% of the room rate) subject to room size and fire safety regulations. Quad occupancy is not permitted in standard rooms."
        ],
        bulletStyle: 'bullet'
      },
      {
        heading: "Child Policy:",
        points: [
          "Children under 5 years stay free when using existing bedding (no extra bed provided). A maximum of one child per room is allowed without additional charges.",
          "Breakfast charges may apply for children based on the hotel's meal pricing policy, typically at 50% of adult rates for children aged 5-12. Children under 5 may eat free from the kids' menu in select properties."
        ],
        bulletStyle: 'bullet'
      },
      {
        heading: "Code of Conduct & Safety:",
        points: [
          "No illegal activities, disruptive behavior, or property damage permitted on premises. Violation may result in immediate eviction without refund and potential legal action depending on severity.",
          "Smoking allowed only in designated areas; drugs strictly prohibited throughout the property. Smoking in non-smoking rooms incurs a deep cleaning fee of approximately ₹5,000.",
          "Hotel not responsible for lost or stolen personal items. Guests are encouraged to use in-room safes or reception deposit boxes for valuables. Lost and found items are retained for 30 days."
        ],
        bulletStyle: 'bullet'
      },
      {
        heading: "Booking & Payment:",
        points: [
          "Stay extensions are subject to availability and current room rates, which may differ from your original booking rate due to seasonal pricing or occupancy fluctuations.",
          "Payments accepted only via Gapstays' secure payment platforms including credit/debit cards, net banking, UPI, and Gapstays Wallet. Cash payments are not accepted at most properties for security reasons."
        ],
        bulletStyle: 'bullet'
      },
      {
        heading: "Support & Contact:",
        points: [
          "Report any issues immediately via Gapstays Support channels available 24/7 through the app, website chat, or dedicated support hotline to ensure prompt resolution during your stay.",
          "Complaints raised after check-out will not be entertained for compensation purposes. All concerns must be reported while on property to allow management the opportunity to address them immediately."
        ],
        bulletStyle: 'bullet'
      }
    ]
  },
  {
    title: "Unmarried Couples and Local ID Policy",
    items: [
      {
        heading: "Couple Check-in Guidelines",
        points: [
          "Gapstays Hotel may have restrictions on bookings from unmarried couples or those with local ID proofs based on specific regional regulations and individual property policies designed to comply with local ordinances.",
          "Such policies will be clearly communicated during the booking process with property-specific tags indicating 'Couple-Friendly' or 'Local IDs Accepted' to help you make an informed decision before reservation.",
          "Note: If a booking is denied by the hotel due to these policies despite being displayed as acceptable during booking, Gapstays will assist in finding alternative accommodation, but no refund will be issued if guests misrepresent their status during reservation."
        ],
        bulletStyle: 'bullet'
      },
      {
        heading: "Local ID Considerations",
        points: [
          "Properties in certain locations may have restrictions on accepting guests with identification from the same city or district due to local regulations aimed at maintaining neighborhood characteristics.",
          "When booking with local ID, please verify the property's policy by checking the 'Local ID Accepted' tag or contacting customer support before finalizing your reservation to avoid check-in complications."
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
          "If guests fail to provide a valid government-issued photo ID with clearly visible information that matches the booking details. Expired, damaged, or photocopied IDs may not be accepted at the discretion of the property management.",
          "If minor guests are unaccompanied by a guardian or parent. Minors (under 18 years) must be accompanied by an adult with proper documentation establishing their relationship or guardianship status.",
          "If the hotel deems the guest's check-in suspicious or inappropriate, including cases of visible intoxication, threatening behavior toward staff, attempts to circumvent security protocols, or presenting false information during registration."
        ],
        bulletStyle: 'number'
      },
      {
        heading: "Post-Denial Procedures",
        points: [
          "In such cases, Gapstays Hotel will not be liable to provide a refund as these requirements are clearly communicated during the booking process and constitute a breach of the reservation agreement.",
          "Guests denied check-in may contact Gapstays customer support for assistance in finding alternative accommodation, though any price difference or additional costs will be the guest's responsibility."
        ],
        bulletStyle: 'bullet'
      }
    ]
  }
];

const PolicyItem = ({ item, isDarkBg }: { item: PolicyItem; isDarkBg: boolean }) => {
  return (
    <div className="mb-6">
      {item.heading && (
        <h3 className={`text-base sm:text-lg font-semibold mb-3 ${isDarkBg ? 'text-white' : 'text-black'}`}>{item.heading}</h3>
      )}
      <ul className={`pl-5 ${item.bulletStyle === 'none' ? 'list-none pl-0' : ''}`}>
        {item.points.map((point, index) => (
          <li 
            key={index}
            className={`mb-3 ${
              item.bulletStyle === 'number' 
                ? 'list-decimal' 
                : item.bulletStyle === 'bullet' 
                  ? 'list-disc' 
                  : ''
            } ${isDarkBg ? 'text-gray-300' : 'text-gray-700'}`}
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

const PolicySection = ({ section, index }: { section: PolicySection; index: number }) => {
  const isDarkBg = index % 2 !== 0;
  
  return (
    <section 
      className={`py-16 sm:py-20 w-full ${isDarkBg ? 'bg-neutral-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6">
        <div className="mb-8 sm:mb-12 text-center">
          <div className={`text-2xl sm:text-3xl md:text-4xl font-bold pb-4 ${isDarkBg ? 'text-white' : 'text-black'}`}>{section.title}</div>
          <div className={`w-16 sm:w-20 h-1 bg-orange-500 mx-auto`}></div>
        </div>

        <div className={`rounded-lg p-6 sm:p-8 ${isDarkBg ? 'bg-neutral-800' : 'bg-white'} shadow-sm`}>
          {section.items.map((item, idx) => (
            <PolicyItem key={idx} item={item} isDarkBg={isDarkBg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Policies = () => {
  return (
    <div className="w-full">
      <section className="bg-gray-50 pt-16 sm:pt-20 pb-10 scroll-mt-16">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6">
          <div className="mb-8 sm:mb-12 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black pb-4">Our Policies</h1>
            <div className="w-16 sm:w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
        </div>
      </section>

      {policySections.map((section, index) => (
        <PolicySection key={index} section={section} index={index} />
      ))}

      <section className="bg-gray-50 flex justify-center py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="p-4 bg-orange-100 rounded-lg border-l-4 border-orange-500">
            <p className="text-base text-gray-800">
              <span className="font-semibold text-black">Important:</span> These policies are subject to change. For the most current version, please review our policies at the time of booking. By completing a reservation with Gapstays, you acknowledge and agree to abide by all applicable policies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policies;