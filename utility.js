class utility {
  error(err, data, res){
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write('404 Not Found');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    }
  }
}

module.exports = utility;