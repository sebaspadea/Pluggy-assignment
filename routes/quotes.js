const userRoutes = (app, fs) => {

  const dataPath = "../data/quotes.json"


  app.get('/quotes', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.json(JSON.parse(data));
    });
  });
};

module.exports = userRoutes;