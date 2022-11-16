var fs = require('fs');
const { DownloaderHelper } = require('node-downloader-helper');
var $ = require('jquery');
var cheerio = require('cheerio');
var axios = require('axios');

//* do visit the site
axios.get(`https://medium.com/`)  //** link where img gallery
    .then((response) => {
        let $ = cheerio.load(response.data);

$( ".ae" ).each(function() { //** the gallry selector

//* set var
var vidimg = $(this).find('a[rel="noopener follow"] img[src]').attr("src"); //** img download link

//* set combined var
var vidid = vidimg.lastIndexOf('/'); //* vid ID
//* create files folder
if (!fs.existsSync('./files/'+vidid)) {fs.mkdirSync('./files/'+vidid,{recursive:true});}

//* download img
(async () => {
const dl = new DownloaderHelper(vidimg, './files/'+vidid+'/',   { fileName: 'img.jpg'} );
dl.on('end', () => console.log('did '+ vidid+' img'));
dl.on('error', (err) => console.log('didnt '+ vidid+' img, '+err));
await dl.start().catch(err => console.error('didnt '+ vidid+' img, error='+err));
})();


}); //* the problem it lunch all img at once.

}) //** end response

	
	
