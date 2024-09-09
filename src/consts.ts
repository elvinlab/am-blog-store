import type {
  modelCategory,
  modelComment,
  modelSettings,
  modelSite,
  modelSocialNetwork,
} from '@models/index'

const site: modelSite = {
  title: 'Eli Recomienda', // required
  favicon: './favicon.svg',
  iconBrand: 'ri-hand-heart-fill', // required
  description: 'Descripción de la pagina',
  author: 'Eli', // required
  avatarLink:
    'https://utfs.io/f/d28d449a-5b5a-464e-b8e3-86d782ef7819-n92lk7.webp', // required
  bio: 'Actions speak louder than words.',
  url: '',
  recentBlogSize: 5,
  archivePageSize: 25,
  postPageSize: 10,
  feedPageSize: 20,
  beian: '',
}

/**
 TODO Revisar si codeFoldingStartLines tiene algun efecto
 */
const settings: modelSettings = {
  lang: 'es', // en | es
  codeFoldingStartLines: 16, // Need to re-run the project to take effect
  ga: '', // If you want to integrate with Google Analytics, just enter your GA-ID here.
}

const categories: modelCategory[] = [
  {
    name: 'Blog',
    iconClass: 'ri-draft-line',
    href: '/blog/1',
  },
  {
    name: 'Feed',
    iconClass: 'ri-lightbulb-flash-line',
    href: '/feed/1',
  },
  {
    name: 'Archive',
    iconClass: 'ri-archive-line',
    href: '/archive/1',
  },
  {
    name: 'Message',
    iconClass: 'ri-chat-1-line',
    href: '/message',
  },
  {
    name: 'Search',
    iconClass: 'ri-search-line',
    href: '/search',
  },
  {
    name: 'More',
    iconClass: 'ri-more-fill',
    href: 'javascript:void(0);',
    children: [
      {
        name: 'About',
        iconClass: 'ri-information-line',
        href: '/about',
      },
      {
        name: 'Friends',
        iconClass: 'ri-user-5-line',
        href: '/friends',
        target: '_self',
      },
    ],
  },
]

const socialNetwork: modelSocialNetwork[] = [
  {
    icon: 'ri-telegram-fill',
    name: 'telegram',
    outlink: 'xxxxxxx',
  },
  {
    icon: 'ri-twitter-fill',
    name: 'twitter',
    outlink: 'xxxxxxx',
  },
  {
    icon: 'ri-instagram-fill',
    name: 'instagram',
    outlink: 'xxxxxxx',
  },
  {
    icon: 'ri-github-fill',
    name: 'github',
    outlink: 'xxxxxxx',
  },
  {
    icon: 'ri-rss-fill',
    name: 'rss',
    outlink: 'xxxxxxx',
  },
]

const comment: modelComment = {
  enable: false,
  type: 'waline',
  waline: {
    serverUrl: '',
    lang: 'en',
    pageSize: 20,
    wordLimit: '',
    count: 5,
    pageview: true,
    reaction: true,
    requiredMeta: ['nick', 'mail'],
    whiteList: ['/message/', '/friends/'],
  },
}

export default {
  $_site: site,
  $_comment: comment,
  $_settings: settings,
  $_socialNetwork: socialNetwork,
  $_categories: categories,
}
