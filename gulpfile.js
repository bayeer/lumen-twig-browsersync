const gulp        = require('gulp')
//const sass        = require('gulp-sass')
const nodemon     = require('gulp-nodemon')
const notify      = require('gulp-notify')
const browserSync = require('browser-sync').create()


// var src = {
//     sass:   'assets/sass/*.sass',
//     css:    'public/stylesheets'
// }
//
//
// gulp.task('sass', function() {
//     return gulp.src(src.sass)
//         .pipe(sass())
//         .pipe(gulp.dest(src.css))
//         .pipe(reload({stream: true}))
// })


const port = 7000

gulp.task('watch', function() {
    // https://ponyfoo.com/articles/a-browsersync-primer#inside-a-node-application
    browserSync.init({
        files: ['resources/views/*.twig', 'routes/*.php'],
        online: false,
        open: true,
        host: 'localhost',
        port: port+1,
        proxy: {
            target: 'http://localhost:' + port,
            //ws: true
        },
        ui: false
        // ui: {
        //     port: 8080
        // },
        //logConnections: true
    })

    //gulp.watch(src.sass, ['sass'])
})

gulp.task('default', ['watch'])
