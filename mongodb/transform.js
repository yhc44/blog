// Connect to your MongoDB instance
var dbName = 'universe';
var collectionName = 'logs';
var connectionString = `mongodb+srv://foobar:superrandom@xyz/${dbName}`;
var db = connect(connectionString);
// Find all documents with a createdAt field containing an ISO date string
var documents = db[collectionName].find({ createdAt: { $type: 'string' } });
// Iterate over the documents and update the createdAt field
documents.forEach(function (doc) {
  var isoDateString = doc.createdAt;
  var bsonDate = new Date(isoDateString);

  db[collectionName].updateOne(
    { _id: doc._id },
    { $set: { createdAt: bsonDate } }
  );
});

// Print a message after the transformation is complete
print('Transformation complete.');