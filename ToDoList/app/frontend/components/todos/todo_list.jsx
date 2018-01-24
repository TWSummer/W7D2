import React from 'react';
import TodoForm from '../todo_list/todo_form';
import TodoListItem from '../todo_list/todo_list_item';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (

      <div>
        <ul>
          {
            this.props.todos.map( (todo, idx) => {
            return <TodoListItem key={todo.id}
                                 todo={todo}
                                 changeTodoStatus={this.props.changeTodoStatus}
                                 changeDetail={this.props.changeDetail}
                                 fetchSteps={this.props.fetchSteps}
                                 steps={this.props.steps[todo.id]}/>;
          })
        }
        </ul>
        <TodoForm createTodo={this.props.createTodo}
                  errors={this.props.errors}
                  clearErrors={this.props.clearErrors}/>
      </div>
    );
  }
}

export default TodoList;

// module.exports = ({todos, receiveTodo, removeTodo}) => {
//   return (
//     <div>
//       <ul>
//         {todos.map( (todo, idx) => {
//           return <li key={idx}>{ todo.title }</li>;
//         })}
//       </ul>
//       <TodoForm receiveTodo={receiveTodo}/>
//     </div>
//   );
// };
