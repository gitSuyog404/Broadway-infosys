import http from "http";
import fs from "fs";

let users = [
  {
    id: 1,
    username: "John.Doe",
  },
];

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
  } else if (req.method === "POST") {
    let data = "";
    if (req.url === "/adduser") {
      req.on("data", (chunk) => {
        data += chunk;
      });
      req.on("end", () => {
        users.push(JSON.parse(data));
        res.end("User added");
      });
    }
  }
});

server.listen(3000, () => console.log("Server is running"));
