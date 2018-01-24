import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos, allSteps } from '../../reducers/selectors';
import { createTodo, changeTodoStatus, changeDetail, fetchTodos }
  from '../../actions/todo_actions';
import { clearErrors } from '../../actions/error_actions';
import { fetchSteps } from '../../actions/step_actions';



const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors,
  steps: allSteps(state)
});

const mapDispatchToProps = dispatch => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  changeTodoStatus: (todoId) => dispatch(changeTodoStatus(todoId)),
  changeDetail: (todoId) => dispatch(changeDetail(todoId)),
  fetchTodos: () => dispatch(fetchTodos()),
  clearErrors: () => dispatch(clearErrors()),
  fetchSteps: (todo) => dispatch(fetchSteps(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
