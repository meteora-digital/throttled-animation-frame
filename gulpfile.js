// Import `src` and `dest` from gulp for use in the task.
const { src, dest } = require('gulp');

// Import Gulp plugins.
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');

// Gulp 4 uses exported objects as its tasks. Here we only have a
// single export that represents the default gulp task.
exports.default = function(done) {
  // This will grab any file within src/components or its
  // subdirectories, then ...
  return src('./src/js/**/*.js')
    // Stop the process if an error is thrown.
    .pipe(plumber())
    // Transpile the JS code using Babel's preset-env.
    .pipe(concat('throttled-animation-frame.js'))
    .pipe(babel({
    	presets: [
    	['@babel/env', {
    		modules: false
    	}]
    	]
    }))
    // Save each component as a separate file in dist.
    .pipe(dest('./dist/js'))
};

