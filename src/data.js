import { getPermalink } from './utils/permalinks';

export const headerData = {
  // links: [
  //   {
  //     text: 'Landing',
  //     links: [
  //       {
  //         text: 'Sass',
  //         href: getPermalink('/landing/saas'),
  //       },
  //       {
  //         text: 'Startup',
  //         href: getPermalink('/landing/startup'),
  //       },
  //       {
  //         text: 'Mobile App',
  //         href: getPermalink('/landing/mobile-app'),
  //       },
  //     ],
  //   },
  //   {
  //     text: 'Pages',
  //     links: [
  //       {
  //         text: 'Features',
  //         href: getPermalink('/#features'),
  //       },
  //       {
  //         text: 'Pricing',
  //         href: '#',
  //       },
  //       {
  //         text: 'About us',
  //         href: '#',
  //       },
  //       {
  //         text: 'Contact',
  //         href: '#',
  //       },
  //       {
  //         text: 'Terms',
  //         href: getPermalink('/terms'),
  //       },
  //       {
  //         text: 'Privacy policy',
  //         href: getPermalink('/privacy'),
  //       },
  //     ],
  //   },
  //   {
  //     text: 'Widgets',
  //     href: '#',
  //   },
  //   {
  //     text: 'Blog',
  //     href: getBlogPermalink(),
  //   },
  // ],
  actions: [
    {
      type: 'button',
      text: 'Call us',
      href: 'tel:323-413-7428',
      icon: 'tabler:phone-call',
    },
    {
      type: 'button',
      text: 'Email us',
      href: 'mailto:onlinesales@lacentercloseout.com?subject=Website Inquiry',
      icon: 'tabler:mail',
    },
  ],
};

export const footerData = {
  // links: [
  //   {
  //     title: 'Product',
  //     links: [
  //       { text: 'Features', href: '#' },
  //       { text: 'Security', href: '#' },
  //       { text: 'Team', href: '#' },
  //       { text: 'Enterprise', href: '#' },
  //       { text: 'Customer stories', href: '#' },
  //       { text: 'Pricing', href: '#' },
  //       { text: 'Resources', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Platform',
  //     links: [
  //       { text: 'Developer API', href: '#' },
  //       { text: 'Partners', href: '#' },
  //       { text: 'Atom', href: '#' },
  //       { text: 'Electron', href: '#' },
  //       { text: 'AstroWind Desktop', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Support',
  //     links: [
  //       { text: 'Docs', href: '#' },
  //       { text: 'Community Forum', href: '#' },
  //       { text: 'Professional Services', href: '#' },
  //       { text: 'Skills', href: '#' },
  //       { text: 'Status', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Company',
  //     links: [
  //       { text: 'About', href: '#' },
  //       { text: 'Blog', href: '#' },
  //       { text: 'Careers', href: '#' },
  //       { text: 'Press', href: '#' },
  //       { text: 'Inclusion', href: '#' },
  //       { text: 'Social Impact', href: '#' },
  //       { text: 'Shop', href: '#' },
  //     ],
  //   },
  // ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  // socialLinks: [
  //   { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
  //   { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  //   { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  //   { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  //   { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  // ],
  footNote: `
    Website by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://devinlane.com/" target="_blank"> Devin Lane</a> · 
    Design adapted from <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/" target="_blank"> onWidget</a> · All rights reserved.
  `,
};
