const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

//добавить 1 todo
	app.post('/addtodo', (req, res) => {
		const todo = { title: req.body.title, complete: req.body.complete};
		db.collection('todos').insertOne(todo, (err, result) => {
            if (err) {
                throw res.send({err});
			} else {
				res.send(result.ops[0]);
            }
		});
	});

//удалить 1 todo
	app.delete('/deletetodo', (req, res) => {
		const id = req.body._id;
		console.log('@@@@@@@@@@ req.body._id', req.body._id);
		const details = { '_id': ObjectID(id) };
		db.collection('todos').deleteOne(details, (err, item) => {
			if (err) {
				throw res.send({err});
			} else {
				res.send(id);
			}
		});
	});

//удалить все выполненные todo

	app.delete('/cleartodos', (req, res) => {
		db.collection('todos').deleteMany({complete: true}, (err, item) => {
			if (err) {
				throw res.send({err});
			} else {
				res.send('ok');
			}
		});
	});

// изменить состояние 1 todo
	app.put ('/updateonechbox', (req, res) => {
		const id = req.body.id;
		const details = { '_id': ObjectID(id) };
		db.collection('todos').updateOne(details, { $set: { complete: req.body.complete} }, (err, result) => {
			if (err) {
				throw res.send({err});
			} else {
				res.send(id);
			}
		});
	});

// изменить состояние всех todo check/unchek
	app.put ('/updateallchbox', (req, res) => {
		const complete = req.body.complete;
		db.collection('todos').updateMany({complete: !complete}, { $set: { complete: complete} }, (err, result) => {
			if (err) {
				throw res.send({err});
			} else {
				res.send('ok');
			}
		});
	});

	//взять todo из бд
	app.get('/todos', (req, res) => {
			db.collection('todos').find().toArray(function(err, todos) {
				res.send(todos);
			});
	});

	// изменить текст 1 todo
	app.put ('/updateonetitle', (req, res) => {
		const id = req.body.id;
		const details = { '_id': ObjectID(id) };
		db.collection('todos').updateOne(details, { $set: {title: req.body.title} }, (err, result) => {
			if (err) {
				throw res.send({err});
			} else {
				res.send(id);
			}
		});
	});

};