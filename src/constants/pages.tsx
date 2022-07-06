export interface PageInterface {
  title?: string;
  description?: string;
  ogType?: string;
  link?: string;
  ogImage?: string;
}

export interface PagesInterface {
  [key: string]: PageInterface;
}
const pages: PagesInterface = {
  home: {
    title: " BoomLabs: Websites Built with Cutting Edge Technologies and SEO",
    description:
      "We buld the fastest websites in the world with modern designs that will improve your user experience and decrease the bounce rates. Our SEO services can put you on the first page of google and organically bring more customers",
    ogType: "website",
    link: "https://www.boomlabs.agency/",
    ogImage: "https://www.boomlabs.agency/ogp.png",
  },
  contact: {
    title: "contact us - Boomlabs",
    description: "Contact us to hire a web design, development and SEO agency.",
    ogType: "article",
    link: "https://www.boomlabs.agency/contact",
    ogImage: "https://www.boomlabs.agency/ogp.png",
  },
  about: {
    title: "About us - Boomlabs",
    description:
      "We buld the fastest websites in the world with modern designs that will improve your user experience and decrease the bounce rates. Our SEO services can put you on the first page of google and organically bring more customers",
    ogType: "article",
    link: "https://www.boomlabs.agency/about",
    ogImage: "https://www.boomlabs.agency/ogp.png",
  },
};

export default pages;
