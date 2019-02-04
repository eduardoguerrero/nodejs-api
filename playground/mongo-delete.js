

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client)=>{

	if(err){
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB server');

	const db = client.db('TodoApp');


	//Delete many - documents
	//db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
	//	console.log(result);
	//});


	//DeleteOne - documents
	//db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
	//	console.log(result);
	//});


	//FindOneAndDelete - documents
	db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
		console.log(result);
	});



});
