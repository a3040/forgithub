const express = require("express"); // 모듈 load
const app = express(); // express를 사용하여 app 생성
 

app.use(express.static('public'));


// logger middleware
app.use((req, res, next) => {
    console.log('New request received:');
    console.log(`  - Method: ${req.method}`);
    console.log(`  - Path: ${req.path}`);
    next();
  });


// 라우팅
app.get("/", (req, res) => {
    res.send("Hello World!??!");
  });
  

// 라우팅
app.get("/noroute/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Hel?????ld!??! ${id}`);
  });
  
  
// 서버 시작
app.listen(3000);