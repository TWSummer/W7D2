import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';
import { destroyTodo } from '../../actions/todo_actions';
import { allSteps } from '../../reducers/selectors';

const mapDispatchToProps = dispatch => ({
  destroyTodo: (todo) => dispatch(destroyTodo(todo))
});

const mapStateToProps = state => ({
  steps: state.steps
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoDetailView);
