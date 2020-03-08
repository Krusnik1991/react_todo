import React from 'react';

class AddTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.changeTitleTask = this.changeTitleTask.bind(this);
		this.onKeyPress = this.onKeyPress.bind(this);
	}

	changeTitleTask(e) {
		this.setState({value: e.target.value});
	}

	addNewTodo = () => {
		this.props.addNewTodo(this.state.value);
		this.resetName();
	};

	onKeyPress(e) {
		if (e.key === 'Enter') {
			this.addNewTodo()
		}
	}

	resetName() {
		this.setState({value: ''});
	}

	render() {

		return (

			 <div className='input-group'>
				 <label className='input-group-text' onClick={this.props.massCheckUncheck}>
					 <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='red'>
						 <path d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z'/>
					 </svg>
				 </label>
				 <input id='inputTodo'
				        type='text'
				        className='form-control'
				        placeholder='Enter todo list item'
				        onChange={this.changeTitleTask}
				        onKeyPress={this.onKeyPress}
				        value={this.state.value}
				 />
				 <button id='btn' type='button'
				         className='btn btn-primary'
				         onClick={this.addNewTodo}>
					 Add
				 </button>
			 </div>
		);
	}
}


export default AddTask;