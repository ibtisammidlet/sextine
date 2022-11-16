const { DownloaderHelper } = require('node-downloader-helper');
const dl = new DownloaderHelper('https://camo.githubusercontent.com/2564f5ac649dfec40b488e13c8b4538f21470ded4c3df810c073db28be09b1da/68747470733a2f2f6170702e666f7373612e696f2f6170692f70726f6a656374732f6769742532426769746875622e636f6d25324668676f75766569612532466e6f64652d646f776e6c6f616465722d68656c7065722e7376673f747970653d6c61726765', './files',   {retry: true, fileName: 'xec.webmmmm'} );
dl.on('progress', (progress) => console.log(progress));
dl.on('end', () => console.log('Download Completed'))
dl.start();