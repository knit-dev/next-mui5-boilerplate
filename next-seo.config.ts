const seoConfig = {
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '',
    site_name: process.env.NEXT_PUBLIC_SITE_NAME,
    title: process.env.NEXT_PUBLIC_SITE_NAME,
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
  }
};

export default seoConfig;