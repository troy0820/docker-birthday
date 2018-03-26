const Hapi = require('hapi')
const request = require('request');

const server = new Hapi.Server({
  host: '0.0.0.0',
  port: '8080'
});


server.route({
  method: 'GET',
  path: '/',
  config: {
    description: 'Index',
    handler: async (req, h) => {
      const promise = new Promise((resolve, reject) => {
        request('https://seeclickfix.com/api/v2/issues?place_url=can_vancouver&per_page=10&page=1', (err, response, body) => {
      if (err) {
        reject(err)
      }
      resolve(JSON.parse(body));
      });
    })
        return promise;
   }
  }
});

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
