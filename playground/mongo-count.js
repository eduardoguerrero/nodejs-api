/*
Install Mongo:
npm install mongodb@3 --save

Start Mongo server:
mongod --dbpath="C:\Users\rene.escobar03\Documents\mongoData"

Start example:
node mongodb-count.js

Api Mongo:
http://mongodb.github.io/node-mongodb-native/3.0/api/
*/


const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client)=>{
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB server');

	const db = client.db('TodoApp');

	db.collection('Todos').find().count().then((count)=>{
		console.log(`Todos count: ${count}`);
	},(err)=>{
		console.log('unable to fecth Todos', err);
	});

});