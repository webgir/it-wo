import avatar from '../assets/images/post-author.jpg';

export const author = {
  name: 'Site Author',
  avatar,
  url: '#',
  socials: [
    {
      platform: 'pinterest',
      label: 'Pinterest',
      href: 'https://ru.pinterest.com/sikeysipi/',
    },
    {
      platform: 'telegram',
      label: 'Telegram',
      href: 'https://t.me/nejro_art',
    },
  ],
};

export type Author = typeof author;

