const http = require("http");
const fs = require("fs");
const argv = require("minimist")(process.argv.slice(2));

let hC = "";
let pC = "";
let rC = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  hC = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  pC = project;
});

fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  rC = registration;
});

const port = argv.port || 3000;

http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(pC);
        response.end();
        break;
      case "/registration":
        response.write(rC);
        response.end();
        break;
      default:
        response.write(hC);
        response.end();
        break;
    }
  })
  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

// lineDetail.question("Press Enter to close the server...", () => {
//   lineDetail.close();
// });