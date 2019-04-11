// Gulp Variables
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat'); //works with js and css
var autoprefixer = require('gulp-autoprefixer'); //autoprefix css before concatinating for better browser support
var plumber = require('gulp-plumber');// Prevent pipe breaking caused by errors from gulp plugins, keeps web server running in order to fix errors without having to re-run the task that's broken
var sourcemaps = require('gulp-sourcemaps'); //create sourcemaps for SASS and JS
var sass = require('gulp-sass');
var babel = require("gulp-babel"); // takes future versions of JS (like es6/es2015) and compile it to something browsers can use
var del = require('del'); //delete files and folders
var gzip = require('gulp-gzip');


// Image Compression
var imagemin    = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');

var fontello    = require('gulp-fontello');
var flatten 	= require('gulp-flatten'); //for stripping the folders and leaving just the files on the top level of a folder

var favicons 	= require('gulp-favicons');






/**
 * Critical CSS - Screen sizes variable used in 'critical' css
 */

var dimensionSettings = [{
    width: 639,
    height: 667
}, {
    width: 641,
    height: 1024
}, {
    width: 1024,
    height: 1366
}, {
    width: 1025,
    height: 1366
}, {
    width: 1441,
    height: 900
}, {
    width: 1921,
    height: 1175
}];


gulp.task('criticalhome', function(cb) {
    critical.generate({
        base: 'views/critical-styles/',
        src: "http://ayima.develop",
        dest: "home.css",
        dimensions: dimensionSettings,
        minify: true,
        ignore: ['@font-face']
    }, cb);
});




/**
 * Paths to project folders
 */

var paths = {
	scripts: {
		src: 'src/js',
		build: ''
	},
	sass: {
		src: 'src/css',
		build: ''
	},
	images: {
		src: 'src/img/**/*.{png,jpeg,jpg,svg,gif}',
        build: 'static/img/',
        uploads: '../../uploads/'
	},
    templates: 'templates',
    views: 'views', //single page views, named by page-{slug-name-here}.twig    
    
    icons: {
        src: 'src/fonts/fontello/config.json',
        build: 'build/fonts/fontello',
        dist: 'fonts/icons'
    },
    fonts: {
        src: 'src/fonts/**/*.{eot,ttf,woff,woff2,otf}',        
        dist: 'fonts/fontfiles',
        src_css:'src/fonts',
        dist_css: 'fonts_css'
    },
    favicons: {
        src: 'src/favicon/favicon.png',
        build: 'build/favicons',
        dist: 'favicons'
    }
};

// Javascript Scripts
gulp.task('scripts', function (){
    console.log('Starting scripts task');

    return gulp.src([
        paths.scripts.src + "/vendor/bxslider/bxslider.js",
        paths.scripts.src + "/vendor/other/**/*.js",
        paths.scripts.src + "/custom/**/*.js"
    
        ]) // load js files into gulp from the SCRIPTS_PATH path variable
        .pipe(plumber(function (err) { //when an error happens, the function gets called 
            console.log('Scripts Task Error'); //when error happens, Print out the message 'Scripts Task Error'
            console.log(err); // Prints out the error object describing exactly what went wrong
            this.emit('end'); // 'this' is an internal gulp method that tells it to stop running the rest of the processes but still keep gulp up
        }))
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(uglify()) // pipe(pass source file through multiple steps) | call uglify
        //.pipe(size({ gzip: true, showFiles: true }))        
        .pipe(concat('scripts.min.js')) //concatinate with the only argument being the name of the new .js file
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.scripts.build)) //after uglify, place files into destination folder 
        .pipe(gzip())
        .pipe(livereload());    // in order to refresh the browser, modify the tasks
                                // once the files get compressed trigger the reload
});






// Build Favicon

gulp.task('favicons', function () {
    console.log('Starting Build Favicons task');
    return gulp.src(paths.favicons.src)
    .pipe(favicons({
        appName: "My App",
        appShortName: "App",
        appDescription: "Graphic Design Company",
        developerName: "Kolbo Studios",
        developerURL: "https://kolbostudios.com/",
        background: "#020307",
        path: paths.favicons.output,
        url: "https://kolbostudios.com/",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/?homescreen=1",
        version: 1.0,
        logging: false,
        html: "index.html",
        pipeHTML: true,
        replace: true,
        icons: {
            android: false, // Create Android homescreen icon. `boolean`
            appleIcon: true, // Create Apple touch icons. `boolean`
            appleStartup: false, // Create Apple startup images. `boolean`
            coast: true, // Create Opera Coast icon. `boolean`
            favicons: true, // Create regular favicons. `boolean`
            firefox: true, // Create Firefox OS icons. `boolean`
            opengraph: false, // Create Facebook OpenGraph image. `boolean`
            twitter: false, // Create Twitter Summary Card image. `boolean`
            windows: true, // Create Windows 8 tile icons. `boolean`
            yandex: true // Create Yandex browser icon. `boolean`
        }
    }))
    .pipe(gulp.dest(paths.favicons.dist));
});



 // build fontello
 gulp.task("build-icons", function () {
	console.log('Starting Build Fontello Icons task');
    return gulp.src(paths.icons.src)
        .pipe(fontello())
        .pipe(gulp.dest(paths.icons.build));
});

// Copy fonts from the 'build/fonts/*' folder and place them all into the top level of the 'fonts' folder
gulp.task("dist-fonts", function () {
	console.log('Starting Distribute Fonts task');
    
    gulp.src(paths.icons.build + '/**/*')
    .pipe(gulp.dest(paths.icons.dist));

	gulp.src(paths.fonts.src)
	.pipe(flatten())
    .pipe(gulp.dest(paths.fonts.dist));
});


// Default Gulp Task
gulp.task('fonts',['build-icons', 'dist-fonts'], function(){ //specify an array of tasks to build before running the main task
    console.log('Starting Fonts task');
});
gulp

// Styles for SASS/SCSS
gulp.task('styles', function () {
    console.log('Starting styles task');
    return gulp.src(paths.sass.src + '/style.scss') // the source array of paths listing the order of css files to process with 'gulp-concat'
        .pipe(plumber(function (err) { //when an error happens, the function gets called 
            console.log('Styles Task Error'); //when error happens, Print out the message 'Styles Task Error'
            console.log(err); // Prints out the error object describing exactly what went wrong
            this.emit('end'); // 'this' is an internal gulp method that tells it to stop running the rest of the processes but still keep gulp up
        }))
        .pipe(sourcemaps.init()) // kick off the sourcemaps process--find out what the files look like before concantinating and minifying them.
        .pipe(autoprefixer()) //autoprefix css before concatinating for better browser support
        .pipe(sass({
            outputStyle: 'compressed'
        }))        
        .pipe(sourcemaps.write()) // writes the sourcemaps to the file based on the state when 'sourcemaps.init' was called        
        // needs to be placed before writing to the destination folder 
        .pipe(gulp.dest(paths.sass.build))
        .pipe(livereload());
});


// Styles for Fonts
gulp.task('font-styles', function () {
    console.log('Starting Compress Font CSS Styles task');
    return gulp.src(paths.fonts.src_css + '/*.css') // the source array of paths listing the order of css files to process with 'gulp-concat'
        .pipe(plumber(function (err) { //when an error happens, the function gets called 
            console.log('Styles Task Error'); //when error happens, Print out the message 'Styles Task Error'
            console.log(err); // Prints out the error object describing exactly what went wrong
            this.emit('end'); // 'this' is an internal gulp method that tells it to stop running the rest of the processes but still keep gulp up
        }))
        .pipe(autoprefixer()) //autoprefix css before concatinating for better browser support
        .pipe(sass({
            outputStyle: 'compressed'
        }))        
        .pipe(gulp.dest(paths.fonts.dist_css))
        .pipe(livereload());
});











gulp.task('gzip'), function () {
    console.log('Starting GZip task');
    return gulp.src([
        paths.sass.build + '/*.css' //additional sources can go here...just add a comma (leave off the comma on the last in the array)        
    ]) // the source array of paths
    .pipe(plumber(function (err) { //when an error happens, the function gets called 
        console.log('GZip Task Error'); //when error happens, Print out the message 'Styles Task Error'
        console.log(err); // Prints out the error object describing exactly what went wrong
        this.emit('end'); // 'this' is an internal gulp method that tells it to stop running the rest of the processes but still keep gulp up
    }))           
    .pipe(gzip())
    // needs to be placed before writing to the destination folder 
    .pipe(gulp.dest(paths.sass.build))
    .pipe(livereload());

}




gulp.task('clean', function (){
    return del.sync([
       DIST_PATH 
    ]);
});

// Images
gulp.task('images', function (){
    console.log('Starting images task');
    return gulp.src(paths.images.src)
        .pipe(imagemin(
            [
                imagemin.gifsicle(),
                imagemin.jpegtran(),
                imagemin.optipng(),
                imagemin.svgo(),
                imageminPngquant(),
                imageminJpegRecompress()
            ]
        ))
        .pipe(gulp.dest(paths.images.build));
});


// Images
gulp.task('compress-uploaded-images', function (){
    console.log('Starting Compress WP Upload Images task');
    return gulp.src(paths.images.uploads + '**/*')
        .pipe(imagemin(
            [
                imagemin.gifsicle(),
                imagemin.jpegtran({
                    progressive: true
                }),
                imagemin.optipng(),
                imagemin.svgo(),
                imageminPngquant(
                    {
                        quality: '65-80',
                        speed: 1, 
                        floyd: 1 
                    }
                ),
                imageminJpegRecompress({
                    accurate: true,
                    progressive: true,                    
                    min: 62,
                    max: 72,                    
                    loops: 6
                })
            ]
        ))
        .pipe(gulp.dest(paths.images.uploads));
});





// Default Gulp Task
gulp.task('default',['images', 'styles', 'scripts', 'fonts','font-styles', 'favicons', 'gzip'], function(){ //specify an array of 
    console.log('Starting Default task');
});

gulp.task ('production',['default','compress-uploaded-images'], function(){
    console.log('Starting Production task');
});


// Watch 
// note: 'gulp.watch' is built into Gulp
gulp.task('watch', function () {
    console.log('Starting watch task');
    livereload.listen(); //startup server running locally
    gulp.watch(paths.scripts.src, ['scripts']); // If the scripts change, run the 'scripts' task
    gulp.watch(paths.sass.src + '/app.scss', ['styles']);
    gulp.watch(paths.sass.src + '/**/*.scss', ['styles']);
    gulp.watch(paths.templates + '/**/*.{twig,html,php}').on('change', livereload.reload);
    gulp.watch(paths.views + '/**/*.{twig,html,php}').on('change', livereload.reload);
});