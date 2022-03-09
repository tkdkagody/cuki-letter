const express = require('express')
const app = express();

const PORT = process.env.PORT || 8001;

app.use(express.static('build'));


app.get('/', function(req,res) {
    res.sendFile(__dirname + '/build/index.html')
})

app.listen(PORT,()=> {
    console.log('server is running ')
});

//client build -< build 폴더 > server/build -> 서버를 실행 
//client 폴더로 이동 