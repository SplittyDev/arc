var gulp = require('gulp');
var exec = require('child_process').exec;
var gulp = require('gulp-help')(gulp);

var build_gulp_project = function (dir, next) {
  return exec(`gulp --gulpfile ${dir}/gulpfile.js -- build`, function (err, stdout, stderr) {
    if (err) {
      console.log(stdout);
      console.log(stderr);
    } else {
      if (next !== void 0 && next.constructor === Function) {
        next();
      }
    }
  });
};

gulp.task('build', 'Builds all projects', [
  'build:libarc',
  'build:server',
  'build:client'
]);

gulp.task('build:proto', 'Build the arc protocol', function (next) {
  console.log('INFO: Please rebuild the protocol manually.');
  return next();
});

gulp.task('build:libarc', 'Builds the arc library', ['build:proto'], function (next) {
  return build_gulp_project('./libarc', next);
});

gulp.task('build:server', 'Builds the arc server cli', ['build:libarc'], function (next) {
  return build_gulp_project('./server', next);
});

gulp.task('build:client', 'Builds the arc client cli', ['build:libarc'], function (next) {
  return build_gulp_project('./client', next);
});
