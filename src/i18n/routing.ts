import { defineRouting } from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['pt', 'en'],
  defaultLocale: 'pt',
  pathnames: {
    '/': '/',
    '/sobre': {
      en: '/about',
      pt: '/sobre'
    },
    '/contato': {
      en: '/get-in-touch',
      pt: '/contato'
    },
    '/politica-privacidade': {
      en: '/privacy-policy',
      pt: '/politica-privacidade'
    },
    '/cookies': '/cookies'
  }
})