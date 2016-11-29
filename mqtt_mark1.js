var mosca = require('mosca');

var ascoltatore = {
  //using ascoltatore
  type: 'tcp',
  url: 'tcp://localhost:27017/mqtt',
  pubsubCollection: 'ascoltatori',
  tcp: {}
};

var settings = {
  port: 1883,
  backend: ascoltatore
};

var server = new mosca.Server(settings);

console.log('Configured');

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

// fired when a message is received
server.on('published', function(packet, client) {
  console.log('Published', packet.payload);
});

server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
}