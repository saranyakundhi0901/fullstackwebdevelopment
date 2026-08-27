//os module
const os = require('os');


console.log(`OS Platform: ${os.platform()}`); // e.g., 'darwin', 'win32', 'linux'
console.log(`CPU Architecture: ${os.arch()}`); // e.g., 'x64'
console.log(`Total Memory: ${os.totalmem()} bytes`);
console.log(`Free Memory: ${os.freemem()} bytes`);
console.log(`Current User Info:`, os.userInfo());
//path module
const path = require('path');


const filePath = '/users/john/documents/report.txt';


// Get the directory name
console.log(`Directory Name: ${path.dirname(filePath)}`); // /users/john/documents


// Get the filename
console.log(`File Name: ${path.basename(filePath)}`); // report.txt


// Get the file extension
console.log(`File Extension: ${path.extname(filePath)}`); // .txt


// Join path segments to create a new path
const newPath = path.join(__dirname, 'data', 'config.json');
console.log(`Joined Path: ${newPath}`); // C:\path\to\your\app\data\config.json

//dns module
const dns = require('dns');
// Resolve a domain name to an array of IP addresses
dns.lookup('google.com', (err, address, family) => {
  if (err) throw err;
  console.log(`IP Address for google.com: ${address}`);
  console.log(`IP Family: ${family}`); // e.g., 4 for IPv4, 6 for IPv6
});


// Resolve all records for a domain
dns.resolve4('google.com', (err, addresses) => {
  if (err) throw err;
  console.log(`All IPv4 addresses for google.com:`, addresses);
});

//net module
const net = require('net');


const server = net.createServer((socket) => {
  console.log('Client connected.');
  socket.write('Hello from the server!');


  socket.on('data', (data) => {
    console.log(`Received from client: ${data}`);
  });


  socket.on('end', () => {
    console.log('Client disconnected.');
  });
});


server.listen(3000, () => {
  console.log('Server listening on port 3000.');
});



