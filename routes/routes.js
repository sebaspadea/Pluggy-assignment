const appRouter = (app, fs) => {
  app.get('/', (req, res) => {
    res.send('welcome to the development api-server');
  });
};


module.exports = appRouter;
