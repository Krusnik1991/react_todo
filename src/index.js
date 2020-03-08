import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import TodoList from './components/todoList';
import AddTask from './components/addTask';

import axios from 'axios';

class TodoApp extends Component {

	constructor(props) {
		super(props);

		this.state = {
			todos: [
				{title: '1', complete: false},
                {title: '1', complete: false},
                {title: '1', complete: false},
                {title: '1', complete: false},
                {title: '1', complete: false},
                {title: '1', complete: false},
                {title: '1', complete: false},
                {title: '1', complete: false},
                {title: '1', complete: false},
                {title: '1', complete: false},
                {title: '1', complete: false},
                {title: '1', complete: false},
                {title: '1', complete: false}


			],
			filter: 'All'
		};

		this.addNewTask = this.addNewTask.bind(this);
		this.toggleTodo = this.toggleTodo.bind(this);
		this.destroyTask = this.destroyTask.bind(this);
		this.massCheckUncheck = this.massCheckUncheck.bind(this);
		this.setFilter = this.setFilter.bind(this);
		this.editTodo = this.editTodo.bind(this);
	}

	componentWillMount() {
		axios.get(`http://localhost:3100/todos`).then(res => {
			this.setState({todos: res.data})
		})
			 .catch(function (error) {
				 console.log('@@@@@@@@@@ error', error);
			 });
	}

	toggleTodo(e) {
		const todos = this.state.todos;
		let todo = todos.find(todo => todo._id === e.target.dataset.id);
		axios.put(`http://localhost:3100/updateonechbox`, {
			id: todo._id, complete: !todo.complete
		})
			 .then(res => {
				 todo.complete = !todo.complete;
				 this.setState({todos: todos});
			 })
			 .catch(function (error) {
				 console.log('@@@@@@@@@@ error', error);
			 });
	}

	editTodo(e) {
		const todos = this.state.todos;
		console.log('@@@@@@@@@@ e', e);
		let todo = todos.find(todo => todo._id === e.dataset.id);
		let editTitle = e.value.trim();
		if (editTitle !== '') {
			axios.put(`http://localhost:3100/updateonetitle`, {
				id: todo._id, title: editTitle
			})
				 .then(res => {
					 todo.title = editTitle;
					 this.setState({todos: todos});
				 })
				 .catch(function (error) {
					 console.log('@@@@@@@@@@ error', error);
				 });
		}
	}

	destroyTask(e) {

		const todos = this.state.todos;
		let todo = todos.find(todo => todo._id === e.target.dataset.id);
		axios.delete(`http://localhost:3100/deletetodo`, {
			data: {_id: todo._id}
		})
			 .then(res => {
				 let idx = todos.indexOf(todo);
				 todos.splice(idx, 1);
				 this.setState({todos: todos});
			 })
			 .catch(function (error) {
				 console.log('@@@@@@@@@@ error', error);
			 });
	}


	addNewTask(newTitle) {
		const todos = this.state.todos;
		newTitle = newTitle.trim();
		console.log('newTitle ', newTitle);
		if (newTitle !== '') {

			axios.post(`http://localhost:3100/addtodo`, {
				title: newTitle,
				complete: false
			})
				 .then(res => {
					 console.log('@@@@@@@@@@ ', res.data);
					 todos.push(res.data);


					 this.setState({todos: todos});
				 })
				 .catch(function (error) {
					 console.log('@@@@@@@@@@ error', error);
				 });
		}


	};

	getTypeOfCompletionTasks(TypeComplete) {
		return this.state.todos.filter(task => task.complete === TypeComplete).length;
	}

	clearCompletedTasks = (e) => {
		axios.delete(`http://localhost:3100/cleartodos`)
			 .then(res => {
				 this.setState({
					 todos: this.state.todos.filter((t) => !t.complete)
				 });
			 })
			 .catch(function (error) {
				 console.log('@@@@@@@@@@ error', error);
			 });
	};

	massCheckUncheck() {
		const todos = this.state.todos;
		if (todos.filter((todo) => !todo.complete).length > 0) {
			axios.put(`http://localhost:3100/updateallchbox`, {
				complete: true
			})
				 .then(res => {
					 todos.map((task) => {
						 task.complete = true;
					 });

					 this.setState({todos: todos});
				 })
				 .catch(function (error) {
					 console.log('@@@@@@@@@@ error', error);
				 });
		} else {
			axios.put(`http://localhost:3100/updateallchbox`, {
				complete: false
			})
				 .then(res => {
					 todos.map((task) => {
						 task.complete = false;
					 });

					 this.setState({todos: todos});
				 })
				 .catch(function (error) {
					 console.log('@@@@@@@@@@ error', error);
				 });
		}
	}

	setFilter(e) {
		this.setState({filter: e.target.dataset.type});
	}

	render() {
		let currentFilterTodos = this.state.todos.filter((todo) => (this.state.filter === 'All') || ((this.state.filter === 'InComplete') && (!todo.complete)) || ((this.state.filter === 'Complete') && (todo.complete)));

		return (

			 <div className='container'>
				{/* <div className='modal fade' id='exampleModal' tabIndex='-1' role='dialog'
				      area-labelledby='exampleModal' aria-hidden='true'>
					 <div className='modal-dialog modal-sm' role='document'>
						 <div className='modal-content'>
							 <div className='modal-header'>
								 <h5 className='modal-title' id='exampleModalLabel'>Авторизация</h5>
								 <button className='close' type='button' data-dismiss='modal' aria-label='Close'>
									 <span aria-hidden='true'>&times;</span>
								 </button>
							 </div>
							 <div className='modal-body'>
								 <div className='container-fluid'>
									 <form>
										 <div className='form-group'>
											 <label for='exampleInputEmail'>Email address</label>
											 <input id='exampleInputEmail' type='email' className='form-control'
											        aria-sescribdby='emailHelp' placeholder='Email'/>
										 </div>
									 </form>
								 </div>
							 </div>
						 </div>
					 </div>
				 </div>*/}
				 <h1 className='display-2 text-center'>TodoList</h1>
				 <p className='lead text-center'>Welcome to my todoList applications</p>
				 <div className='row'>
					 <div id='form-enter-todo' className='col-lg-7 col-9 mx-auto form-enter-todo'>
						 <AddTask addNewTodo={this.addNewTask} massCheckUncheck={this.massCheckUncheck}/>
					 </div>
				 </div>

				 <div className='row'>
					 <p id='quantityComplete'
					    className='mx-auto quantityComplete col-lg-7 col-9 text-right'>
                        <span id='complete'><b>
	                    {
		                    this.getTypeOfCompletionTasks(true)
	                    }
	                        </b> Complete </span>
						 <span id='incomplete'><b>
						{
							this.getTypeOfCompletionTasks(false)
						}
						 </b> InComplete</span>
					 </p>
				 </div>

				 <div className="row">
					 <ul id='list' className='list col-lg-7 col-9 mx-auto'>
						 {
							 currentFilterTodos.map(todo => {
								 return <TodoList
									  {...todo}
									  key={todo._id}
									  toggleTodo={this.toggleTodo}
									  destroyTask={this.destroyTask}
									  editTodo={this.editTodo}
								 />

							 })
						 }
					 </ul>
				 </div>
				 <div className="row">
					 <div className='clearfix col-lg-7 col-9 mx-auto'>
						 <div className='btnWrapLeft'>
							 <button type='button' className='btn btn-danger'
							         onClick={this.clearCompletedTasks}>Clear complete
							 </button>
						 </div>
						 <div className='rightWrapper'>
							 <div className='btnWrapRight'>
								 <button type='button'
								         className={this.state.filter === 'Complete' ? 'btn btn-primary filter-active' : 'btn btn-primary'}
								         data-type='Complete'
								         onClick={this.setFilter}>Complete
								 </button>
							 </div>
							 <div className='btnWrapRight'>
								 <button type='button'
								         className={this.state.filter === 'InComplete' ? 'btn btn-primary filter-active' : 'btn btn-primary'}
								         data-type='InComplete'
								         onClick={this.setFilter}>InComplete
								 </button>
							 </div>
							 <div className='btnWrapRight'>
								 <button type='button'
								         className={this.state.filter === 'All' ? 'btn btn-primary filter-active' : 'btn btn-primary'}
								         data-type='All'
								         onClick={this.setFilter}>All
								 </button>
							 </div>
						 </div>
					 </div>
				 </div>
			 </div>
		);
	};
}


ReactDOM.render(
	 <TodoApp/>,
	 document.getElementById('root')
);