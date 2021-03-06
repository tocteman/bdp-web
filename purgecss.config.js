module.exports = {
  content: ['./public/**/*.html', './src/**/*.js'],
  css: ['./src/layouts/index.css'],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[A-z0-9-:\/]+/g)
        }
      },
      extensions: ['html', 'js'],
    },
  ],
  whitelist: ['headroom--unfixed', 'headroom--pinned', 'headroom-alt', 'current', 'next', 'move', 'current.move', 'next.move', 'texto', 'pic'],
}
