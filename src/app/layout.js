import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  // metadata for dreambay homes
  title: "DreamBay Homes | Your Home Away From Home",
  description: "DreamBay Homes offers modern, well-designed, and strategically located apartments for business travelers, holidaymakers, and long-stay guests. Experience comfort, quality, and exceptional service in our shortlet apartments.",
  keywords: [
    "DreamBay Homes",
    "shortlet homes",
    "short let apartment",
    "Short let website",
    "airBNB",
    "luxury apartments Nigeria",
    "business travel accommodation",
    "holiday homes Nigeria",
    "serviced apartments",
    "temporary housing",
    "vacation rentals",
    "comfortable stay",
    "premium shortlets",
    "modern apartments",
    "home away from home"
  ].join(", "),
  openGraph: {
    title: 'DreamBay Homes | Luxury Shortlet Apartments',
    description: 'Experience luxury living in our modern, well-equipped shortlet apartments. Perfect for business travelers, tourists, and long-term stays in prime locations across Nigeria.',
    url: 'https://dreambayhome.netlify.app/',
    siteName: 'DreamBay Homes',
    images: [
      {
        url: '/images/logo.png',
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
    title: 'DreamBay Homes | Premium Shortlet Apartments',
    description: 'Discover our collection of luxury shortlet apartments designed for comfort and style. Book your perfect stay today.',
    images: ['/images/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://dreambayhome.netlify.app/',
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
  verification: {
    google: 'your-google-verification-code',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" nighteye='disabled'>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
