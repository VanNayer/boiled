const express = require('express');
const fs = require('fs');
const app = express();
const filePath = __dirname + '/data.json'; // eslint-disable-line

const readFile = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf8'); // eslint-disable-line
    return JSON.parse(data);
  } catch (exception) {
    console.log(exception); // eslint-disable-line
    return JSON.parse('{"epics":[]}');
  }
};

app.post('/update', (request, respond) => {
  let body = '';
  request.on('data', data => {
    body += data;
  });
  request.on('end', () => {
    const newEpicsJson = readFile();
    newEpicsJson['epics'].push(body);
    const newUniqEpicsJson = [];
    newEpicsJson['epics'].forEach(epic => {
      if (newUniqEpicsJson.indexOf(epic) === -1) newUniqEpicsJson.push(epic);
    });
    newEpicsJson['epics'] = newUniqEpicsJson;
    fs.writeFileSync(filePath, JSON.stringify(newEpicsJson), 'utf8'); // eslint-disable-line
    respond.send(JSON.stringify(newEpicsJson));
  });
});

app.get('/load', (request, respond) => {
  respond.send(readFile());
});
app.use('/', express.static(__dirname));

app.listen(9000);
