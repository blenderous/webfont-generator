var Fontmin = require('fontmin');

// function to convert .otf format to .ttf
var otf2ttf = new Fontmin()
    .src('./input/*.otf')
    .use(Fontmin.otf2ttf())
    .dest('./output');

// create webfonts from .ttf or .otf
var fontFaceGenerate = new Fontmin()
    .src('./input/*')
    .dest('./output');

// choose which function to run
fontFaceGenerate.run(function (err, files) {
    if (err) {
        throw err;
    }
});
