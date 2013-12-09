var path = require('path');
var url = require('url');
var fs = require('fs');
var httpRequest = require('http-request')
var http = httpRequest.createHttpClient();

module.exports.datadir = path.join(__dirname, "../data/sites.txt"); // tests will need to override this.


var fetchHtml = function(url) {
  var html;





  return html;
}
module.exports.handleRequest = function (req, res) {
  console.log(exports.datadir);
  console.log(http);
  // console.log(req);
  if (req.method === 'GET' && req.url === '/') {
    console.log(exports.datadir);
    fs.readFile(exports.datadir, function(err, data) {
      fetchHtml(data);
      res.writeHead(200, {
      'Content-Type': 'text/plain' }); 
      res.end(data); 
    })
  }
};
