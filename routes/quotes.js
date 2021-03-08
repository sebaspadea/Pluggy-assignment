const quotesJson = require('../data/quotes.json');
const fs = require('fs');

const quotesRoutes = (app, fs) => {


  app.get('/quotes', (req, res) => {
    fs.readFile(quotesJson, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.json(JSON.parse(data));
    });
  });
};

module.exports = quotesRoutes;