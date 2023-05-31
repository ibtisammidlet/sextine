const fs = require('fs');

// Function to fetch directory names
function getDirectoryNames() {
  return new Promise((resolve, reject) => {
    fs.readdir('./files', (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}

// Function to generate the HTML snippet with directory names
async function generateHTMLSnippet() {
  try {
    const directoryNames = await getDirectoryNames();

    let htmlSnippet = `<!--
note:
- search descreption isn't available in blogger xml importing API
- to use more then 1 category for post diplicat category div
- blogger limit post url id to 7 words or 36 letter 
- URL can't be seted by xml importing
- theres a daily limit for xml importing in blogger
- you can't edit postes with reimporting them with or without deletion bexouse blogger ganerate new url rendomly
-->


<!-- xml head -->
<?xml version='1.0' encoding='UTF-8'?>
<?xml-stylesheet href="https://www.blogger.com/styles/atom.css" type="text/css"?>
<feed
	xmlns='http://www.w3.org/2005/Atom'
	xmlns:openSearch='http://a9.com/-/spec/opensearchrss/1.0/'
	xmlns:gd='http://schemas.google.com/g/2005'
	xmlns:thr='http://purl.org/syndication/thread/1.0'
	xmlns:georss='http://www.georss.org/georss'>
<!-- xml head End -->
	
	<!-- untested -->
		<id>tag:blogger.com,1999:blog-6465067949479237449.archive</id>
	<updated>2019-05-18T08:45:12.250-07:00</updated>
	<generator version='7.00' uri='https://www.blogger.com'>Blogger</generator>
    <!-- untested End -->

<!-- each entry is a post-->	
	<entry>
	    <!-- needed to work -->
		<id>tag:blogger.com,1999:blog-6465067949479237449.post-986453880091597916</id>
		<!-- needed to work End-->
		
		<!-- untested -->
		<published>2019-05-18T08:21:00.001-07:00</published>
		<updated>2019-05-18T08:45:12.226-07:00</updated>
		<!-- untested End -->
		
        <!-- type -->
		<category scheme='http://schemas.google.com/g/2005#kind' term='http://schemas.google.com/blogger/2008/kind#post'/>
		
<!-- to be work in -->		
		<!-- category -->
		<category scheme='http://www.blogger.com/atom/ns#' term='toys'/>
		<!-- title change it to add new post otherways it will be marged with cerrent post with the same name -->
		<title type='text'>litet relsin43</title>
		<!-- html content -->
		<content type='html'>
<!-- how to post 2021-6-8 -->
<!-- make a post like this, change (id) with id of pornhub video -->
`

;
    for (const id of directoryNames) {
      htmlSnippet += `<img id="first_img" src="http://server.sextine.com/files/${id}/lazyload.jpg" style="display: none;"></img>\n`;
      htmlSnippet += `<div id="idonserver" style="display: none;">${id}</div>\n`;
    }
      htmlSnippet += `<!-- for search discription say
watch and download (video name here)


all videos are uploaded/posted using im a lover google account

all videos after Fake Taxi Hot Japanese Petite Babe Rae Lil Black Shows Deepthroat Skills
are tested and working users can play the videos other videos should work too but not important  -->

		</content>
<!-- to be work in End -->	
    </entry>

	
</feed>`;

    // Save the HTML snippet to a file
    fs.writeFile('importing-posts.xml', htmlSnippet, (err) => {
      if (err) {
        console.error('Error saving file:', err);
      } else {
        console.log('File saved successfully!');
      }
    });

  } catch (err) {
    console.error('Error:', err);
  }
}

generateHTMLSnippet();
