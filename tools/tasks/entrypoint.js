import { join } from 'path';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import template from 'gulp-template';
import browsersync from 'browser-sync';

import { APP_BASE, SOURCE_ROOT, DIST_ROOT } from '../constants';

gulp.task('entrypoint', () => {
  return gulp.src(join(SOURCE_ROOT, 'index.html'))
    .pipe(plumber())
    .pipe(template({
      APP_BASE,
      POLYFILLS_SCRIPT: '<script src="polyfills.js" defer></script>',
      VENDOR_SCRIPT: '<script src="vendor.js" defer></script>',
      APP_SCRIPT: '<script src="app.js" defer></script>'
    }))
    .pipe(gulp.dest(DIST_ROOT))
    .pipe(browsersync.stream());
});
