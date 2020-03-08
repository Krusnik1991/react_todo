import React from 'react';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {title: ''};
		this.setEdit = this.setEdit.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
		this.changeTitleTask = this.changeTitleTask.bind(this);
		this.onKeyPress = this.onKeyPress.bind(this);

	}

	setEdit(e) {
		if (document.getElementsByClassName('edit-title').length === 0) {
			this.setState({title: e.target.dataset.title})
		}
	}

	changeTitleTask(e) {
		this.setState({title: e.target.value});
	}

	onKeyPress(e) {
		if (e.key === 'Enter') {
			this.props.editTodo(document.getElementsByClassName('edit-title')[0]);
			this.setState({title: ''});
		}
	}

// Вызывается после удаления компонента из DOM
	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside, false);

	}

// Вызывается до рендера
	componentWillMount() {
		document.addEventListener('click', this.handleClickOutside, false);

	}
    
    // Проверка клика на дом элемент, не равный полю редактирования
    isClickedOnEditField(e) {
        let arrTags = e.composedPath();
            for (let key in arrTags) {
                if (arrTags[key].classList) {
                    if (arrTags[key].classList.contains('edit-title')) {
                        return true;
                    }
                }
            // alternate ease method for that operation (because Element.classList is not a standard array but a DOMTokenList object). convert that DOMobj in array
/*                if (arrTags[key].classList) {
                if ([...arrTags[key].classList].includes('edit-title')) {
                    return true;
                }
            }*/
            }
        return false;
    }

// Отлавливаем клик на любую область
	handleClickOutside(e) {
        if (document.getElementsByClassName('edit-title').length !== 0) {
    // Получаем ссылку на элемент, при клике на который, скрытие не будет происходить
            const editBlock = document.getElementsByClassName('edit-title')[0];        
    // Проверяем, есть ли в списке родительских или дочерних элементов, вышеуказанный компонент
            if (!this.isClickedOnEditField(e) && this.state.title !== '') {
    // Если в области кликнутого элемента нету "edit-title"
                this.props.editTodo(editBlock);
                this.setState({title: ''});                
            } 
        }
	}

	render() {
		const text = this.state.title === '' ?
			 <p className={this.props.complete ? 'complete textforli' : 'textforli'} data-id={this.props._id}
			    data-title={this.props.title}
			    onDoubleClick={this.setEdit}>{this.props.title}</p> :
			 <input type='text' className='edit-title hh kk' value={this.state.title} data-id={this.props._id}
			        onChange={this.changeTitleTask} onKeyPress={this.onKeyPress} autoFocus={true}/>;
		return (
			 <li className='clearfix'>
				 <label className='custom-control custom-checkbox'>
					 <input type='checkbox' data-id={this.props._id}
					        className='checkbox custom-control-input'
					        onChange={this.props.toggleTodo}
					        checked={this.props.complete ? 'checked' : ''}/>
					 <span className='custom-control-indicator'></span>
				 </label>
				 {text}
				 <div className='icon-del'>
					 <svg className='cross-del' onClick={this.props.destroyTask} data-id={this.props._id}
					      xmlns='http://www.w3.org/2000/svg' width='17' height='19' viewBox='0 -4 15 17'>
						 <path
							  data-id={this.props._id}
							  fillRule='evenodd'
							  d='M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z'/>
					 </svg>
				 </div>
			 </li>
		);
	}
}

export default TodoList;