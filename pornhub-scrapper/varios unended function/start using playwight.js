const playwright = require('playwright');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var $ = require('jquery');
const dom = new JSDOM(page);


(async () => {
  for (const browserType of ['chromium']) {
    const browser = await playwright[browserType].launch({ headless: false }); 
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.pornhub.com/video/search?search=threesome&filter_category=111&max_duration=10&page=7', { timeout: 990000 });

$( "li.pcVideoListItem.js-pop.videoblock.videoBox" ).each(function( index ) {
var scrapedvideotitle = $(this).find(".thumbnail-info-wrapper.clearfix .title a").attr("title");
var scrapedvideourl = $(this).find(".thumbnail-info-wrapper.clearfix .title a").attr("href");
var scrapedvideoduration = $(this).find( ".marker-overlays.js-noFade .duration" ).text();
var lazyvidlink = $(this).find(".js-pop.js-videoThumb.thumb.js-videoPreview.lazy").attr('data-mediabook')
var lazyimglink = $(this).find(".js-pop.js-videoThumb.thumb.js-videoPreview.lazy").attr('data-thumb_url')

console.log('<div id="dataneeded"><a id="vidname">name         : '+scrapedvideotitle+'</a></br><a id="viddfrom">download from: https://www.pornhub.com'+scrapedvideourl+'</a></br><a id="vidduration">duration     : '+scrapedvideoduration+'</a></br></div><a id="lazyvidlinkid" href="'+lazyvidlink+'">lazyvidlink </a><a id="lazyvimglinkid" href="'+lazyimglink+'">lazyimglink</a></br>')
})



  }
})();


