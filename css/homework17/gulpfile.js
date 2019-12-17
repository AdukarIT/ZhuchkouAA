var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();


function css_style(done) {

	gulp.src('./scss/design.scss')
	.pipe(sass({
		errorLogToConsole: true,
		outputStyle: 'compressed'
	}))
	.on('error', console.error.bind(console))
	.pipe( gulp.dest('./css/') )
	.pipe(browserSync.stream());

	done();
}

function sync(done) {
	browserSync.init({
		server: {
			baseDir: "./"
		},
		port: 3000
	});
	done();
}

function browserReload(done) {
	browserSync.reload();
	done();
}

function print(done) {
	console.log('hi!');
	done();
}

function watchSass() {
	gulp.watch('./scss/**/*', css_style);
}

function watchFiles() {
	gulp.watch('./scss/**/*', css_style);
	gulp.watch('./**/*.html', browserReload);
	gulp.watch('./**/*.js', browserReload);
}
//gulp.task(css_style);
//gulp.task(print);

gulp.task('default', gulp.parallel(sync, watchFiles));
gulp.task(sync);


//exports.default = defaultSomeTask;