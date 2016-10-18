const dbName = 'exampleDB';
const requests = require('./requests');

requests.getCollection(dbName, 'books', (err, data) => {
  if (err) console.log(err.message);
  console.log(data);
});
