var express = require('express')
var app = express()
var path = require('path');
var qs = require('querystring');
var fs = require('fs')
//var sanitizeHtml = require('sanitize-html');
//var bodyParser = require('body-parser');
// var compression = require('compression')

//MYSQL CONNETCION
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'mycapstonedb.cnoou4raevzv.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: "capstone123",
    database: "KICKMATCH"
});

//MYSQL 커넥션 확인 (Team 테이블 출력)
connection.connect(function (err) {
    if (err) {
        throw err; // 접속에 실패하면 에러를 throw 합니다.
    } else {
        // 접속시 쿼리를 보냅니다.
        connection.query("SELECT * FROM Team", function (err, rows, fields) {
            console.log(rows); // 결과를 출력합니다!!!
        });
    }
});

//router 폴더 연결
const routes = require("./routes/index.js");
app.use(routes)

var port = 3000
const { request } = require('http');
const { response } = require('express');
const req = require('express/lib/request.js');


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
