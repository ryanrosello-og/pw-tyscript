const http = require('http');
const fs = require('fs')

const ap3env = 'prd'
const validRoutes =['banner', 'bar', 'popup', 'form','notification','takeover']
const trackingCode = ap3env == 'prd' ? `
    // from https://on.autopilotapp.com/testautomation/data-sources/60ac77872aa3abb853624a26/overview
    window.ap3c = window.ap3c || {};
    var ap3c = window.ap3c;
    ap3c.cmd = ap3c.cmd || [];
    ap3c.cmd.push(function () {
      ap3c.init("YKx3hyqjq7hTYkomdGVzdGF1dG9tYXRpb24", "https://capture-api.autopilotapp.com/");
      ap3c.track({v: 0});
    });
    var s, t;
    s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://s.autopilotapp.com/app.js";
    t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(s, t);
` : `
    // from https://on.stgautopilotapp.com/testautomation/data-sources/60ca9cadc84ef6bb835910ee/overview
    window.ap3c = window.ap3c || {};
    var ap3c = window.ap3c;
    ap3c.cmd = ap3c.cmd || [];
    ap3c.cmd.push(function () {
      ap3c.init("YMqcrchO9ruDWRDudGVzdGF1dG9tYXRpb24", "https://capture-api-master.stgautopilotapp.com/");
      ap3c.track({v: 0});
    });
    var s, t;
    s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://static.ap3stg.com/capture/master/capture.js";
    t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(s, t);
`

http.createServer((req, res) => {
  const path = req.url.replace('/','')
  if(!validRoutes.includes(path)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write(`This route is not supported: ${req.url}`);
    res.end();
    return;
  }

  if(req.url == '/form') {
    fs.readFile(`./form_${ap3env}.html`, "utf8", function(err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });      
      res.write(data.replace('{{tracking_code}}', trackingCode));
      res.end();
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<html><head><script>${trackingCode}</script></head><body><p>Testing ${path}</p></body></html>`);
    res.end();
  }

}).listen(8081);

console.log('server running on port 80801');