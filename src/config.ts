import type { modelSettings, modelSite } from '@models/index'
// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

/**
 * title {string} website title
 * favicon {string} website favicon url
 * description {string} website description
 * author {string} author
 * avatar {string} Avatar used in the profile
 * motto {string} used in the profile
 * url {string} Website link
 * recentBlogSize {number} Number of recent articles displayed in the sidebar
 * archivePageSize {number} Number of articles on archive pages
 * postPageSize {number} Number of articles on blog pages
 * feedPageSize {number} Number of articles on feed pages
 * beian {string} Chinese policy
 */
const site: modelSite = {
  title: 'Eli Recomienda', // required
  favicon: '/favicon.svg', // required
  description: 'Descripción de la pagina',
  author: 'Eli', // required
  avatar: '/avatar.png', // required
  motto: 'Actions speak louder than words.',
  url: '',
  recentBlogSize: 5,
  archivePageSize: 25,
  postPageSize: 10,
  feedPageSize: 20,
  beian: '',
}

/**
 * busuanzi {boolean} link: https://busuanzi.ibruce.info/
 * lang {string} Default website language
 * codeFoldingStartLines {number}
 * ga {string|false}
 */
const settings: modelSettings = {
  lang: 'en', // en | es |
  codeFoldingStartLines: 16, // Need to re-run the project to take effect
  ga: '', // If you want to integrate with Google Analytics, just enter your GA-ID here.
}

/**
 * Navigator
 * name {string}
 * iconClass {string} icon style
 * href {string}  link url
 * target {string} optional "_self|_blank" open in current window / open in new window
 */
const categories = [
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

/**
 * Personal link address
 */
const infoLinks = [
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

/**
 * Comment Feature
 * enable {boolean}
 * type {string} required waline | giscus
 * walineConfig.serverUrl {string} server link
 * walineConfig.lang {string} link: https://waline.js.org/guide/features/i18n.html
 * walineConfig.pageSize {number} number of comments per page. default 10
 * walineConfig.wordLimit {number} Comment word s limit. When a single number is filled in, it 's the maximum number of comment words. No limit when set to 0
 * walineConfig.count {number} recent comment numbers
 * walineConfig.pageview {boolean} display the number of page views and comments of the article
 * walineConfig.reaction {string | string[]} Add emoji interaction function to the article
 * walineConfig.requiredMeta {string[]}  Set required fields, default anonymous
 * walineConfig.whiteList {string[]} set some pages not to display reaction
 */
const comment = {
  enable: false,
  type: 'waline', // waline | giscus,
  walineConfig: {
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
  $_infoLinks: infoLinks,
  $_categories: categories,
}
