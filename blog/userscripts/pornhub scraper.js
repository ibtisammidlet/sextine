// ==UserScript==
// @name         pornhub scraper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.pornhub.com/video/search?*
// @icon         https://www.google.com/s2/favicons?domain=pornhub.com
// @require      https://code.jquery.com/jquery-3.4.0.min.js
// @grant        none
// ==/UserScript==

$( ".thumbnail-info-wrapper.clearfix .title a" ).each(function( index ) {
var scrapedvideotitle = $(this).attr("title");
$(this).parent().parent().parent().parent().append('<a>name         : '+scrapedvideotitle+'</a></br>')
})

$( ".thumbnail-info-wrapper.clearfix .title a" ).each(function( index ) {
var scrapedvideotitle = $(this).attr("href");
$(this).parent().parent().parent().parent().append('<a>download from: https://www.pornhub.com'+scrapedvideotitle+'</a></br>')
})

$( ".marker-overlays.js-noFade .duration" ).each(function( index ) {
var scrapedvideoduration = $(this).text();
$(this).parent().parent().parent().parent().parent().append('<a>duration     : '+scrapedvideoduration+'</a></br>')
})

$( ".js-pop.js-videoThumb.thumb.js-videoPreview.lazy" ).each(function( index ) {
var lazyvidlink = $(this).attr('data-mediabook')
var lazyimglink = $(this).attr('data-thumb_url')
$(this).parent().parent().parent().parent().append('<a href="'+lazyvidlink+'">lazyvidlink </a><a href="'+lazyimglink+'">lazyimglink</a></br>')
})

/** this script was to get directlly blogger post, but after thinking its not productive to upload prelazy etc every 1 post from ph
/*
$( ".thumbnail-info-wrapper.clearfix .title a" ).each(function( index ) {
var scrapedvideotitle = $(this).attr("href");
var scrapedvideoidtobeused = scrapedvideotitle.split(24,)
$(this).parent().parent().parent().parent().append('<input id="tobecpyed" type="text" value="" ></input>');
var officialbloger ='<a><img type="text" id="first_img" src="http://server.sextine.com/files/'+scrapedvideoidtobeused+'/lazyload.jpg" style="display: none;"></img><div  type="text" id="idonserver" style="display: none;">'+scrapedvideoidtobeused+'</div>'

console.log(officialbloger);
*/

/*
$(this).parent().parent().parent().parent().append('<input id="clickMe" type="button" value="copy to blogger"  />');
document.getElementById("clickMe").onclick = function () {
function copyToClipboard(text) {
  var input = document.body.appendChild(document.createElement("input"));
  input.value = officialblooger;
  input.focus();
  input.select();
  document.execCommand('copy');
  input.parentNode.removeChild(input);
}
};
*/

/*
copiedtobloggerpost.select();
navigator.clipboard.writeText(copiedtobloggerpost.value);

})
*/

