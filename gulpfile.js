//Import tasks
var BuildIcons = require('./tasks/build-icons.js');
var BuildWWW = require('./tasks/build-www.js');

//Import gulp
var gulp = require('gulp');

//Import config
var icons = require('./config/icons.json');
var colors = require('./config/colors.json');

//Output folder
var output = '../jviz-icons-pages/';

//Build the icons
gulp.task('build-icons', function(){ BuildIcons(gulp, icons, colors, output); });

//Build the website
gulp.task('build-www', function(){ BuildWWW(gulp, './www/', output); });

//Execute the tasks
gulp.task('build', ['build-icons', 'build-www']);

//Default task
gulp.task('default', ['build']);
