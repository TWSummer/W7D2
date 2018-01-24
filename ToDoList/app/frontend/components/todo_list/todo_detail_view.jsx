import React from 'react';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  removeItem(e) {
    e.preventDefault();
    this.props.destroyTodo(this.props.todo);
  }

  render() {
    const steps = this.props.steps[this.props.todo.id];
    console.log(steps);
    let stepString = "";
    if (steps) {
      stepString = steps.map( (step) => {
        return (
          step.title
        );
      });
    }
    return (
      <div>
        <p>{this.props.todo.body}</p>
        <p>{stepString}</p>
        <button onClick={this.removeItem.bind(this)}>Remove Item</button>
      </div>
    );
  }

}

export default TodoDetailView;
