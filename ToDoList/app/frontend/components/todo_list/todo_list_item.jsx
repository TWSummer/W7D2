import React from 'react';
import TodoDetailView from './todo_detail_view';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.detail = false;
  }

  removeItem(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo.id);
  }

  changeTodoStatus(e) {
    e.preventDefault();
    this.props.changeTodoStatus(this.props.todo);
  }

  changeDetail(e) {
    e.preventDefault();
    this.props.fetchSteps(this.props.todo);
    this.props.changeDetail(this.props.todo.id);
  }

  render() {
    let buttontext = "";
    if (this.props.todo.done) {
      buttontext = "Done";
    } else {
      buttontext = "Undo";
    }
    let detail = "";
    if (this.props.todo.detail) {
      detail = <TodoDetailViewContainer todo={this.props.todo} steps={this.props.steps}/>;
    }

    return (
      <div>
        <li onClick={this.changeDetail.bind(this)}>{this.props.todo.title}</li>
        <button onClick={this.changeTodoStatus.bind(this)}>{buttontext}</button>
        {detail}
      </div>
    );
  }
}


export default TodoListItem;
