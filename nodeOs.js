const os = require('os');


//The os.cpus() method returns an array of objects containing information about each CPU/core installed.
console.log(os.cpus());
console.log("----------------------------------------");
//The os.arch() method returns a string identifying the operating system CPU architecture for which the Node.js binary was compiled.
console.log(os.arch());
console.log("----------------------------------------");
//The os.homedir() method returns the home directory of the current user as a string.
console.log(os.homedir());
console.log("----------------------------------------");
//The os.networkInterfaces() method returns an object containing only network interfaces that have been assigned a network address.
console.log(os.networkInterfaces());
console.log("----------------------------------------");
