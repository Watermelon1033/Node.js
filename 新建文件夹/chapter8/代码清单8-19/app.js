﻿var http = require('http');
var options = {
    hostname: 'www.microsoft.com',
    //hostname: 'www.amicrosoft.com',
    port: 80,
    path: '/',
    method: 'GET'
};
var req = http.request(options,function(res) {
    console.log('状态码: ' + res.statusCode);
    console.log('响应头: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('响应内容: '+chunk);
    });
});
req.on('error', function(err) {
    if (err.code === "ECONNRESET") 
        console.log("socket端口超时。");
    else
        console.log('在请求数据过程中发生错误，错误代码为：'+err.code);
});
/*req.on('socket', function(socket) {
    socket.setTimeout(1000);  
    socket.on('timeout', function() {
        req.abort();
    });
});
req.on('error', function(err) {
    if (err.code === "ECONNRESET") 
        console.log("socket端口超时。");
    else
        console.log('在请求数据过程中发生错误，错误代码为：'+err.code);
});*/
req.end();





