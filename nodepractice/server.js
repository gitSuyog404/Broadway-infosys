import http from "http";

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  res.write("Hello world");
  res.write("\t Bye!");
  res.end();
});

server.listen(3000, () => {
  console.log("server is running");
});
