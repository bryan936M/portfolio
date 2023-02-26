const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/db.json');
const middlewares = jsonServer.defaults({
  static: './build',
});

server.use(middlewares);
server.use('/api', router);

server.listen(process.env.PORT || 3000, () => {
  console.log(`JSON Server is running at ${process.env.PORT || 3000}`);
});
