const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs')
var $ = require('jquery');

let data = [] /** empty array of links to push to it **/

async function getimgdownloadlinks() { /** fatch page, then put links to Array then console-log it, then console errors **/
  try {
    const response = await axios.get(`https://www.pornhub.com/video/search?search=threesome&filter_category=111&max_duration=10&page=7`) /** awaiting promise of done **/

    const $ = cheerio.load(response.data)
$( "li.pcVideoListItem.js-pop.videoblock.videoBox" ).each(  function(elem) { /** getting img download links putting them to array **/
var scrapedvideourl = $(this).find(".thumbnail-info-wrapper.clearfix .title a").attr("href");
var name = scrapedvideourl.substring(24,)+"f.jpg"; /** previewsly pnhbid **/
var dlink = $(this).find(".js-pop.js-videoThumb.thumb.js-videoPreview.lazy").attr('data-thumb_url')	/** previewsly lazyimglink **/
	data.push({'videourl': "fixthis", 'ID': name ,'dlink': dlink}) //* the problem in videourl.
});
}	catch (error) {
	console.error('url requst didt recived: '+error)
}
}


const downloadlinks = async (data) => { /** waiting data defined done like this, outside that function **/
console.log(data)

  for (const {ID, dlink} of data) {

    let file = fs.createWriteStream(ID)
    const response = await axios({
      url: dlink,
      method: 'GET',
      responseType: 'stream'
    })

	.then((res)=>{
		res.data.pipe(file)
		console.log(ID+" done");
		})
    

  }
}


(async () => {
	await getimgdownloadlinks()  /** await setting array of links **/
	downloadlinks(data) /** downloading **/
})()


/**
method from https://medium.com/@41x3n/scraping-a-website-and-downloading-files-with-node-js-using-axios-and-cheerio-7bbb003f6064 ♥
**/