import { getPermalink, getAsset } from '@/utils/permalinks';
export const headerData = {
  links: [
    {
      text: 'About',
      href: '/#about',
      links: [],
    },
    {
      text: 'Pricing',
      href: '/#pricing',
      links: [],
    },
    {
      text: 'Lesson Details',
      href: '/#details',
      links: [],
    },
    {
      text: 'Contact',
      href: '/contact',
      links: [],
    },
  ],
  actions: [{ text: 'Schedule a Lesson', href: '#callToAction', target: '_blank' }],
};
