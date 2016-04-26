var express = require('express'),
    path = require('path'),
    data = require('./data/channel.json'),
    app = express()
    port = 3000;

app.use(express.static(path.join(__dirname, 'app')));
app.get('/api/channel', function(req, res) {
  res.json(data);
});
app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});
