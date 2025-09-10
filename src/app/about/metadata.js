export const metadata = {
  title: 'About Us | DreamBay Homes - Luxury Shortlet Apartments',
  description: 'DreamBay Homes provides beautifully designed shortlets and fully serviced apartments that combine luxury, comfort, and convenience for modern lifestyle in Nigeria.',
  keywords: [
    'DreamBay Homes',
    'luxury apartments Nigeria',
    'shortlet apartments',
    'serviced apartments',
    'about DreamBay',
    'Nigerian real estate',
    'premium accommodation',
    'business travel accommodation',
    'vacation rentals Nigeria'
  ].join(', '),
  openGraph: {
    title: 'About DreamBay Homes | Premium Shortlet Apartments',
    description: 'Discover modern, well-designed, and strategically located apartments for business travelers and holidaymakers. Experience luxury living with DreamBay Homes.',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'DreamBay Homes Luxury Apartments',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About DreamBay Homes | Luxury Living Spaces',
    description: 'Experience modern living in our beautifully designed shortlet apartments. Perfect for business travelers and vacationers.',
    images: ['/twitter-about.jpg'],
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
}