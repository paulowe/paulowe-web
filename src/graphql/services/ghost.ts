import GhostContentAPI from '@tryghost/content-api'

export const ghost = new GhostContentAPI({
  url: 'https://ai-blog.ghost.io',
  key: process.env.GHOST_API_KEY,
  version: 'v3',
})
