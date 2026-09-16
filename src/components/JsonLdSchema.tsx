import React from "react";

export default function JsonLdSchema() {
  const schemaData = [
    // 1. Organization & Legal / Documentation Service LocalBusiness Schema
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "LegalService", "ProfessionalService"],
      "@id": "https://www.goprimeservices.com/#organization",
      name: "Go Prime Services",
      alternateName: ["GoPrimeServices", "Go Prime", "Go Prime Legal Services"],
      url: "https://www.goprimeservices.com",
      logo: "https://www.goprimeservices.com/logo/logo.png",
      image: "https://www.goprimeservices.com/logo/logo.png",
      description:
        "Government-approved registered rent agreements, notarized agreements, partnership deeds, court marriage assistance, and doorstep biometric verification across Maharashtra, India, and worldwide.",
      telephone: "+91-94212-15055",
      email: "contactgoprimeservices@gmail.com",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, UPI, Net Banking",
      areaServed: [
        {
          "@type": "State",
          name: "Maharashtra",
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "20:00",
        },
      ],
      sameAs: [
        "https://wa.me/919421215055",
      ],
    },

    // 2. WebSite Schema with SearchAction
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.goprimeservices.com/#website",
      name: "Go Prime Services",
      alternateName: "GoPrimeServices",
      url: "https://www.goprimeservices.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.goprimeservices.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },

    // 3. FAQPage Schema for Rich Snippets
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a Registered Rent Agreement and why is it mandatory in Maharashtra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Under the Maharashtra Rent Control Act, 1999 (Section 55), every tenancy agreement must be in writing and registered with the Department of Registration and Stamps (IGR Maharashtra). An unregistered agreement lacks official government admissibility in legal disputes.",
          },
        },
        {
          "@type": "Question",
          name: "How does the Doorstep Biometric Verification work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Once the draft agreement is finalized and approved, our UIDAI-certified representative visits your home or office with a biometric scanner. Landlord, tenant, and two witnesses authenticate their Aadhaar identity right at your doorstep.",
          },
        },
        {
          "@type": "Question",
          name: "What documents are required for an online rent agreement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You need Aadhaar Card and PAN Card of both Landlord and Tenant, Aadhaar Cards of two witnesses, and property proof such as an electricity bill, index II, or tax receipt.",
          },
        },
        {
          "@type": "Question",
          name: "Can rent agreement biometric verification be done if a party is in another city or abroad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our doorstep network covers multiple cities across India, and for NRIs/parties residing abroad, we coordinate seamless biometric authentication or embassy attestation assistance.",
          },
        },
        {
          "@type": "Question",
          name: "How long does the entire registration process take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Once biometric verification is completed by all parties, the agreement is submitted directly to the Sub-Registrar Office and is typically approved and registered within 24 to 48 working hours.",
          },
        },
      ],
    },
  ];

  return (
    <>
      {schemaData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
