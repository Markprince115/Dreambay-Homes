// default seo for dreambayhomes
export const defaultSeo ={
    title: 'DreamBay Homes | Your Home Away From Home',
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
    url: 'https://dreambayhomes.com',
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
  // no social profiles yet
  // twitter: {
  //   handle: '@handle',
  //   site: '@site',
  //   cardType: 'summary_large_image',
  // },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    { name: 'author', content: 'DreamBay Homes' },
    { name: 'robots', content: 'index, follow' },
    { name: 'googlebot', content: 'index, follow' },
    { name: 'google-site-verification', content: 'your-google-verification-code' },
  ],
  additionalLinkTags: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],

}