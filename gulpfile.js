/* ========================
GULP REQUIRE FILES
=========================== */
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var inject = require('gulp-inject');
var htmlclean = require('gulp-htmlclean');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var sass = require('gulp-sass');
var tinify = require('gulp-tinify');



/* ========================
GULP PATHS
=========================== */
var paths = {

  // source files
  src: 'src/**/*',
  srcHTML: 'src/**/*.html',
  srcSCSS: 'src/**/*.scss',
  srcCSS: 'src/**/*.css',
  srcJS: 'src/**/*.js',
  srcIMG: 'src/img/*',

  // Development files
  tmp: 'tmp',
  tmpIndex: 'tmp/index.html',
  tmpCSS: 'tmp/**/*.css',
  tmpJS: 'tmp/**/*.js',
  tmpIMG: 'tmp/img/',

  // Production files
  dist: 'dist',
  distIndex: 'dist/index.html',
  distCSS: 'dist/**/*.css',
  distJS: 'dist/**/*.js',
  distIMG: 'dist/img/'

};


/* ========================
GULP TASKS
=========================== */


// -------------------------------------------------
// Tasks to create a development folder structure
// -------------------------------------------------

// Copys template html file to Dev enviroment
gulp.task('html', function () {
  return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.tmp));
});

// Copys template css file to Dev enviroment
gulp.task('css', function () {
  return gulp.src([paths.srcSCSS, paths.srcCSS])
    .pipe(sass())
    .pipe(gulp.dest(paths.tmp));
});

// Copys template Javascript file to Dev enviroment
gulp.task('js', function () {
  return gulp.src(paths.srcJS).pipe(gulp.dest(paths.tmp));
});

// Copys template Images to Dev enviroment
gulp.task('images', function () {
  return gulp.src(paths.srcIMG).pipe(gulp.dest(paths.tmpIMG));
});

// Runs above three tasks together
gulp.task('copy', ['html', 'css', 'js', 'images']);

// INJECTS relative link to css and js files into the html file
gulp.task('inject', ['copy'], function () {
  var css = gulp.src(['tmp/styles/vendors/lib1.css', paths.tmpCSS]);
  var js = gulp.src(['tmp/js/vendors/jquery-3.3.1.min.js', paths.tmpJS]);
  return gulp.src(paths.tmpIndex)
    .pipe(inject( css, { relative:true } ))
    .pipe(inject( js, { relative:true } ))
    .pipe(gulp.dest(paths.tmp));
});

// ------------------------------------------------

// Task creates a local server and then creates a dev enviroment
gulp.task('serve', ['inject'], function () {
  return gulp.src(paths.tmp)
    .pipe(webserver({
      port: 3000,
      livereload: true
    }));
});

// Task to watch for changes before serving them to the local server
gulp.task('watch', ['serve'], function () {
  gulp.watch(paths.src, ['inject']);
});


// Task to make watch the default task which allows you to just type gulp to run all tasks 
gulp.task('default', ['watch']);


// -------------------------------------------------
// Tasks to create a production folder structure
// -------------------------------------------------

// Copys development html file to production enviroment
gulp.task('html:dist', function () {
  return gulp.src(paths.srcHTML)
    .pipe(htmlclean())
    .pipe(gulp.dest(paths.dist));
});

// Copys development css file to production enviroment
gulp.task('css:dist', function () {
  return gulp.src(['src/styles/vendors/lib1.css', paths.srcSCSS, paths.srcCSS])
    .pipe(sass())
    .pipe(concat('style.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.dist));
});

// Copys development javascript file to production enviroment
gulp.task('js:dist', function () {
  return gulp.src(['src/js/vendors/jquery-3.3.1.min.js', paths.srcJS])
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist));
});

// Copys development images and compresses using TinyPNG images
gulp.task('img:dist', function() {
  gulp.src(paths.srcIMG)
      .pipe(tinify('7QmfrCkPzwcb0GFG0VMl1kq3rZVsxXhW'))
      .pipe(gulp.dest(paths.distIMG));
}); 

// Runs above three tasks together
gulp.task('copy:dist', ['html:dist', 'css:dist', 'js:dist', 'img:dist']);

// INJECTS relative link to css and js files into the html file
gulp.task('inject:dist', ['copy:dist'], function () {
  var css = gulp.src(paths.distCSS);
  var js = gulp.src(paths.distJS);
  return gulp.src(paths.distIndex)
    .pipe(inject( css, { relative:true } ))
    .pipe(inject( js, { relative:true } ))
    .pipe(gulp.dest(paths.dist));
});

// ------------------------------------------------

// task to create the build files 
gulp.task('build', ['inject:dist']);

// task to clean the project by removing the dist and tmp folders
gulp.task('clean', function () {
  del([paths.tmp, paths.dist]);
});

