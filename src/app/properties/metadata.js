export const metadata = {
  title: 'Properties | DreamBay Homes - Luxury Shortlet Apartments in Nigeria',
  description: 'Explore our collection of premium shortlet apartments and luxury accommodations. Find your perfect stay with modern amenities, strategic locations, and exceptional service.',
  keywords: [
    'DreamBay properties',
    'luxury shortlet apartments',
    'premium accommodation Nigeria',
    'serviced apartments Lagos',
    'short term rentals',
    'furnished apartments',
    'executive accommodation',
    'luxury rental properties',
    'vacation homes Nigeria',
    'business traveler accommodation',
    'premium shortlets',
    'modern apartments Nigeria'
  ].join(', '),
  openGraph: {
    title: 'Luxury Properties | DreamBay Homes Nigeria',
    description: 'Discover our portfolio of premium shortlet apartments. Modern design meets comfort in prime locations across Nigeria. Book your perfect stay today.',
    images: [
      {
        url: '/og-properties.jpg',
        width: 1200,
        height: 630,
        alt: 'DreamBay Homes Luxury Properties Collection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Properties | DreamBay Homes',
    description: 'Find your perfect luxury apartment. Modern, fully serviced accommodations in prime locations. Experience exceptional comfort and style.',
    images: ['/twitter-properties.jpg'],
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
    canonical: 'https://dreambayhomes.com/properties',
  }
}