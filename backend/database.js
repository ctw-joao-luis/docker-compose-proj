const mongoose = require('mongoose');

const mongodbPort = 'mongodb://webserver-db:27017/myWebserverDB';

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongodbPort);
  console.log("im running")

}