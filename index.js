const http = require("http");
const fs = require("fs");
const args = require('minimist')(process.argv.slice(2));
let homecontent;
let projectContent;
let registrationcontent;

fs.readFile("home.html", (err, data) => {
  if (err)  throw err;
   homeContent = data.toString();
});

fs.readFile("project.html", (err, data) => {
  if (err)  throw err;
  projectContent = data.toString();
});
fs.readFile("registration.html",(err,data) => {
  if (err) throw err;
  registrationcontent = data.toString();
});

  http.createServer((request, response) => {
    let url = request.url;
    response.writeHead(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      case "/registrationpage":
        response.write(registrationcontent);
        response.end()
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  }).listen(args.port);
