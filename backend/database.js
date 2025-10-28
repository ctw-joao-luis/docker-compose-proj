const mongoose = require('mongoose');

const mongodbPort = 'mongodb://127.0.0.1:27017/'

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongodbPort);
  console.log("im running")

}