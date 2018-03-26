const Hapi = require('hapi')
const server = new Hapi.Server({
  host: '0.0.0.0',
  port: '8080'
});


server.route({
  method: 'GET',
  path: '/',
  config: {
    description: 'Index',
    handler (req, h) {
      return "Welcome to Hapi";
    }
  }
})

async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();
