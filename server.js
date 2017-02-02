const express = require('express');
const fs = require('fs');
// const url = require('url');

const app = express();

const filePath = __dirname + '/data.json';

app.post('/update', (request, respond) => {
  let body = '';
  request.on('data', data => {
    body += data;
  });
  request.on('end', () => {
    fs.appendFile(filePath, body, () => {
      respond.end();
    });
  });
});

app.get('/load', (request, respond) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      respond.send({err});
    }
    try {
      respond.send(JSON.parse(data));
    } catch (exception) {
      respond.send({exception});
    }
  });
});
app.use('/', express.static(__dirname));

app.listen(9000);
