/*
Install Mongo:
npm install mongodb@3 --save

Start Mongo server:
mongod --dbpath="C:\Users\rene.escobar03\Documents\mongoData"

Start example:
node mongodb-connect.js

Api Mongo:
http://mongodb.github.io/node-mongodb-native/3.0/api/

MongoDB GUI
Robo mongo
*/

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


//var obj = new ObjectID();
//console.log(obj);

/*
var user = {name: 'Rene', age: 25};
Get property "name" of user:
var {name} = user;
console.log(name);
*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client)=>{

	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	const db = client.db('TodoApp');
	
	/*db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: false
	},(err, result)=>{
		if(err){
			console.log('Unable to insert todo', err)
		}
		console.log(JSON.stringify(result.ops, undefined, 2))	
	});*/


	db.collection('Users').insertOne({
		//_id: 12345,
		name: 'Rene',
		age: 32,
		location: 'Santa Ana'
	},(err, result)=>{
		if(err){
			return console.log('Unable to insert a new user.', err);
		}
		console.log(result.ops[0]._id.getTimestamp());
	});

	client.close();
});

