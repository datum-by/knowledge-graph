const exec = require('child_process').exec;
const path = require('path');
const nconf = require('../config');

const scriptsPath = path.resolve(__dirname, './scripts');
const jenaURL = nconf.get('jenaURL');

const getCollection = (db, collection, cb) => {
  exec(`${scriptsPath}/./s-get ${jenaURL}${db} ${collection}`, (err, stdout) => {
    if (err) cb(err);
    cb(null, stdout);
  });
};

const putCollection = (db, collectionName, cb) => {
  exec(`${scriptsPath}/./s-put ${jenaURL}${db} ${collectionName} src/data/${collectionName}.ttl `, (err, stdout) => {
    if (err) throw cb(err);
    cb(null, stdout);
  });
};

const removeCollection = (db, collection, cb) => {
  exec(`${scriptsPath}/./s-delete ${jenaURL}${db} ${collection}`, (err, stdout) => {
    if (err) throw cb(err);
    cb(null, stdout);
  });
};

module.exports = {
  getCollection,
  putCollection,
  removeCollection,
};
