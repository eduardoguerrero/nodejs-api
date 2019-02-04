/*
Install Mongo:
npm install mongodb@3 --save

Start Mongo server:
mongod --dbpath="C:\Users\rene.escobar03\Documents\mongoData"

Start example:
node mongodb-find.js

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

	//db.collection('Todos').find().toArray().then((docs)=>{
	//db.collection('Todos').find({completed: true}).toArray().then((docs)=>{
		
	db.collection('Todos').find({_id: new ObjectID('5c57d9ce11eb8518903c8d2c') }).toArray().then((docs)=>{
		console.log(JSON.stringify(docs, undefined, 2));
	},(err)=>{
		console.log('unable to fecth Todos', err);
	});	

});
