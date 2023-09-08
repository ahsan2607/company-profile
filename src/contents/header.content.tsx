import { Home, AboutUs, ContactList } from '../pages';

export const headerContent = [
  {
    key: 'nav1',
    name: 'Home',
    link: '/',
    el: <Home />,
  },
  {
    key: 'nav2',
    name: 'About',
    link: '/about/',
    el: <AboutUs />,
  },
  {
    key: 'nav3',
    name: 'Contact',
    link: '/contacts/',
    el: <ContactList />,
  },
];
