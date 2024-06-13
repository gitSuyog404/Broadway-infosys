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

// import fs from "fs";
// import http from "http";

// const server = http.createServer((req, res) => {
//   // Check if the request is for the root URL or '/'
//   if (req.url === "/" || req.url === "/index.html") {
//     // Read the HTML file
//     fs.readFile("index.html", (err, data) => {
//       if (err) {
//         // Handle error if file reading fails
//         res.writeHead(404);
//         res.end("File not found!");
//       } else {
//         // Set content type to HTML
//         res.writeHead(200, { "Content-Type": "text/html" });
//         // Write the contents of the HTML file to the response
//         res.write(data);
//         // End the response
//         res.end();
//       }
//     });
//   } else {
//     // Handle other requests
//     res.writeHead(404);
//     res.end("Page not found!");
//   }
// });

// // Start the server
// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

// import http from "http";
// import fs from "fs";
// import path from "path";

// const server = http.createServer((req, res) => {
//   let filePath = "";
//   let contentType = "text/html";

//   switch (req.url) {
//     case "/":
//       filePath = path.join(__dirname, "nodepractice", "index.html");
//       break;

//     case "/about":
//       filePath = path.join(__dirname, "nodepractice", "about.html");
//       break;

//     case "/contact":
//       filePath = path.join(__dirname, "nodepractice", "contact.html");
//       break;
//   }
//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.write("Internal Server Error");
//       res.end();
//     } else {
//       res.writeHead(200, { "Content-Type": contentType });
//       res.write(data);
//       res.end();
//     }
//   });
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

// Sir ko solution

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.url === "/") {
    res.end("HomePage");
  } else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h2>AboutPage</h2>");
  } else {
    // res.statusCode = 404;
    // res.setHeader("Content-Type", "text/html");
    // The res.writeHead(statuscode, {content-type: text/html})
    // This is the shorthand for statuscode and writehead

    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h3> 404 Not Found </h3>");
  }
});

server.listen(3000, () => console.log("Server is running"));
