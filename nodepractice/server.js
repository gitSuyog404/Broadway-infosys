// import http from "http";

// const server = http.createServer((req, res) => {
//   console.log(req.method, req.url);
//   //   Homework : how to send html tags in res.write(); send full html
//   //  Different urls ma different page ma janu paryo

//   res.write();
//   res.write("\t Bye!");
//   res.end();
// });

// server.listen(3000, () => {
//   console.log("server is running");
// });

import fs from "fs";
import http from "http";

const server = http.createServer((req, res) => {
  // Check if the request is for the root URL or '/'
  if (req.url === "/" || req.url === "/index.html") {
    // Read the HTML file
    fs.readFile("index.html", (err, data) => {
      if (err) {
        // Handle error if file reading fails
        res.writeHead(404);
        res.end("File not found!");
      } else {
        // Set content type to HTML
        res.writeHead(200, { "Content-Type": "text/html" });
        // Write the contents of the HTML file to the response
        res.write(data);
        // End the response
        res.end();
      }
    });
  } else {
    // Handle other requests
    res.writeHead(404);
    res.end("Page not found!");
  }
});

// Start the server
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
