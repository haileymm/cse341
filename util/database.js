// Connect to mongo db

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://haileymg:Hmmajm987!21@cluster0.jvprn.mongodb.net/shop?retryWrites=true&w=majority'
        )
        .then(client => {
            console.log('Connected!');
            _db = client.db();
;            callback();
        })
        
        .catch(err => {
            console.log(err);
            throw err;
        });
};

const getDb = () => {
    if(_db) {  //if _db is defined or exsists
        return _db;
    }
    throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
