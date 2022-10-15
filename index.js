const http = require("http");
const fs = require("fs");
const args = require('minimist')(process.argv.slice(2));
let homecontent;
let projectContent;
let registrationpage;

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home.toString();
});

fs.readFile("project.html", (err, home) => {
  if (err) {
    throw err;
  }
  projectContent = home.toString();
});
http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHead(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(args.port);
