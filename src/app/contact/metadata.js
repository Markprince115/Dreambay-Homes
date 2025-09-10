export const metadata = {
  title: 'Contact Us | DreamBay Homes - Premium Property Rentals',
  description: 'Get in touch with DreamBay Homes for luxury shortlet apartments and premium accommodation solutions. Contact us for bookings, inquiries, or to schedule a viewing.',
  keywords: [
    'contact DreamBay Homes',
    'book luxury apartment',
    'property viewing Nigeria',
    'shortlet booking',
    'apartment inquiry',
    'luxury accommodation contact',
    'property consultation',
    'rental inquiry Nigeria',
    'premium property contact',
    'schedule viewing'
  ].join(', '),
  openGraph: {
    title: 'Contact DreamBay Homes | Book Your Luxury Stay',
    description: 'Connect with us to find your perfect apartment. Expert assistance for bookings, property viewings, and personalized accommodation solutions.',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact DreamBay Homes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact DreamBay Homes | Premium Accommodations',
    description: 'Ready to experience luxury living? Contact us for bookings, inquiries, or to schedule a viewing of our premium properties.',
    images: ['/twitter-contact.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://dreambayhomes.com/contact',
  },
  verification: {
    google: 'your-google-verification-code',
  }
}