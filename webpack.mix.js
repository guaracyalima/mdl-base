let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/assets/js/app.js', 'public/js')
//    .sass('resources/assets/sass/app.scss', 'public/css');


mix.combine([
    'resources/assets/css/theme-default/bootstrap.css',
    'resources/assets/css/theme-default/materialadmin.css',
    'resources/assets/css/theme-default/font-awesome.min.css',
    'resources/assets/css/theme-default/material-design-iconic-font.min.css',

], 'public/assets/css/app.css').version();

mix.styles([

    'resources/assets/js/libs/jquery/jquery-1.11.2.min.js',
    'resources/assets/js/libs/jquery/jquery-migrate-1.2.1.min.js',
    'resources/assets/js/libs/bootstrap/bootstrap.min.js',
    'resources/assets/js/libs/spin.js/spin.min.js',
    'resources/assets/js/libs/autosize/jquery.autosize.min.js',
    'resources/assets/js/libs/nanoscroller/jquery.nanoscroller.min.js',
    'resources/assets/js/core/source/App.js',
    'resources/assets/js/core/source/AppNavigation.js',
    'resources/assets/js/core/source/AppOffcanvas.js',
    'resources/assets/js/core/source/AppCard.js',
    'resources/assets/js/core/source/AppForm.js',
    'resources/assets/js/core/source/AppNavSearch.js',
    'resources/assets/js/core/source/AppVendor.js',
    'resources/assets/js/core/demo/Demo.js',

], 'public/assets/js/app.js').version();

mix.copy('resources/assets/fonts/*', 'public/assets/fonts/');

mix.minify('public/assets/css/app.css').version();
mix.minify('public/assets/js/app.js').version();