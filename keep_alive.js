var http = require('http');

http.createServer(function (req, res) {
  // 可以在这里添加任何需要的逻辑处理请求
  // 例如，设置响应头：
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // 由于不发送任何响应体，所以不需要调用res.write()和res.end()
  // 如果需要，可以在这里添加逻辑来结束响应，例如：
  // res.end();
}).listen(8080);
