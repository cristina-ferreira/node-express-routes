const express = require('express');
const app = express();
const port = 3000;

app.get('/api/movies', (request, response) => {
  response.send('All films');
});

app.get('/api/movies/:id', (request, response) => {
  response.json({id: request.params.id});
});

app.get('/api/employee', (req, res) => {
  let name = req.query.name;
  if(name) {
    res.status(404).send('Unable to retrieve employee ' + name);
  } else {
    res.sendStatus(304);
  }
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});