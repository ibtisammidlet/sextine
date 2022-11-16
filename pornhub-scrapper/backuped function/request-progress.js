var request = require('request');
var progress = require('request-progress');
var fs = require('fs');

progress(request('https://ew.phncdn.com/videos/201904/16/218636091/180P_225K_218636091.webm?validfrom=1634643853&validto=1634651053&rate=150k&burst=1000k&ipa=51.68.152.226&hash=tuScrg0J4ZgLeQwfdRL31MrRhb0%3D'), {
})
.on('progress', function (state) {
    console.log('progress', state);
})
.on('end', function () {
    // Do something after request finishes
})
.pipe(fs.createWriteStream('./files/test.webm‎'));
 