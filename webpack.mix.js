const mix = require('laravel-mix');

mix.ts('src/js/main.ts', 'js/main.js').sourceMaps()
    .sass('src/scss/main.scss', 'css').sourceMaps()
    .setPublicPath('dist').setResourceRoot('../')
    .browserSync({
        proxy: false,
        server: {
            baseDir: './'
        }
    });
