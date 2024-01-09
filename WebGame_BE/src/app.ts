import http from "http";

import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next(); // 다음 미들웨어 함수를 호출
});

app.use((req, res, next) => {
  console.log("In another middleware");
  // express가 자동으로 헤더를 'Content-Type: text/html' 넣어줌, 물론 명시해줄 수도 있음
  res.send("<h1>Hello from Express!</h1>");
});

const server = http.createServer();

server.listen(3000);
