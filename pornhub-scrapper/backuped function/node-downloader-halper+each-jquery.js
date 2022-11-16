var fs = require('fs');
const { DownloaderHelper } = require('node-downloader-helper');
var $ = require('jquery');
var cheerio = require('cheerio');
var axios = require('axios');
/*
const { DownloaderHelper, DH_STATES } = require('./dist');
*/
//* do visit the site
axios.get(`https://www.pornhub.com/video/search?search=threesome&filter_category=111&max_duration=10&page=7`)
    .then((response) => {
        let $ = cheerio.load(response.data);

$( "li.pcVideoListItem.js-pop.videoblock.videoBox" ).each(function(index) { //** the gallry selector

//* set var
var scrapedvideotitle = $(this).find(".thumbnail-info-wrapper.clearfix .title a").attr("title");
var scrapedvideourl = $(this).find(".thumbnail-info-wrapper.clearfix .title a").attr("href");
var scrapedvideoduration = $(this).find( ".marker-overlays.js-noFade .duration" ).text();
var lazyvidlink = $(this).find(".js-pop.js-videoThumb.thumb.js-videoPreview.lazy").attr('data-mediabook')
var lazyimglink = $(this).find(".js-pop.js-videoThumb.thumb.js-videoPreview.lazy").attr('data-thumb_url')	
//* set combined var
var pnhbid = scrapedvideourl.substring(24,); //* set phb vid ID
var data = '<div id="dataneeded"><a id="vidname">name         : '+scrapedvideotitle+'</a></br><a id="viddfrom">download from: https://www.pornhub.com'+scrapedvideourl+'</a></br><a id="vidduration">duration     : '+scrapedvideoduration+'</a></br></div><a id="lazyvidlinkid" href="'+lazyvidlink+'">lazyvidlink </a><a id="lazyvimglinkid" href="'+lazyimglink+'">lazyimglink</a></br>'; //* scrap info
//* create files folder
if (!fs.existsSync('./files/'+pnhbid)) {fs.mkdirSync('./files/'+pnhbid,{recursive:true});}

 
/* download video
(async () => {
const dl = new DownloaderHelper(lazyvidlink, './files/'+pnhbid+'/',   { fileName: 'lazyload.jpg.webm'} );
dl.on('end', () => console.log('did '+ pnhbid+' vid'))
dl.on('error', (err) => console.log('didnt '+ pnhbid+' vid, '+err));
await dl.start().catch(err => console.error('didnt '+ pnhbid+' vid, error='+err));
})();
*/

//* download img
(async () => {
const dl2 = new DownloaderHelper(lazyimglink, './files/'+pnhbid+'/',   { fileName: 'lazyload.jpg'} );
dl2.on('end', () => console.log('did '+ pnhbid+' img'));
//** dl.on('end', () => {}); **/
dl2.on('error', (err) => console.log('didnt '+ pnhbid+' img, '+err));
await dl2.start().catch(err => console.error('didnt '+ pnhbid+' img, error='+err));

/* a function that returns a promise for when the document is ready.
function windowReady(){
    return new Promise(function(resolve){
         window.addEventListener('DOMContentLoaded', resolve);
    }); 
}
*/
/*
return new Promise(function(resolve){
           setTimeout(() => resolve('foo'), 10000);
});
*/
//* write info.html
fs.writeFile('./files/'+pnhbid+'/info.html', data, function (err) {
  if (err) console.log(err);
  console.log(pnhbid+' info.html created.');
});
	
})();





/* a function that returns a promise for when the document is ready.
function windowReady(){
    return new Promise(function(resolve){
         window.addEventListener('DOMContentLoaded', resolve);
    }); 
}
*/


}); //* the problem it lunch all img at once.

})

.catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }  });
	
	
