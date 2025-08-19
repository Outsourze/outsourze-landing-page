/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://outsourze.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,

  // ❌ Exclude pages you don’t want crawled
  exclude: [
    '/404',
    '/500',
    '/admin/*',
    '/api/*',
  ],

  // ✅ Control priority of the rest
  transform: async (config, path) => {
    let priority = 0.5
    let changefreq = 'monthly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (['/about', '/services', '/contact-us'].includes(path)) {
      priority = 0.8
      changefreq = 'weekly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}
