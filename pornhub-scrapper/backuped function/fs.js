var fs = require('fs')
fs.appendFile('log.txt', '\r\nnew data', function (err) {
  if (err) {
    // append failed
  } else {
    // done
  }
})