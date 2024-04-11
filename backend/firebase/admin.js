const admin = require('firebase-admin');
const path = require('path') 
require('dotenv').config()

const serviceAccount = require(path.join(__dirname, '../', process.env.FILE_FIREBASE_NAME));


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  module.exports = admin;


