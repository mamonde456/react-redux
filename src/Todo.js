import { connect, useDispatch } from "react-redux";
import { deleteTodoAction } from "./store";

const Todo = ({ text, id }) => {
  const dispatch = useDispatch();
  return (
    <li>
      {text}
      <button onClick={() => dispatch(deleteTodoAction(id))}>delete</button>
    </li>
  );
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     deleteTodo: () => dispatch(deleteTodoAction(ownProps.id)),
//   };
// };

// export default connect(null, mapDispatchToProps)(Todo);
export default Todo;
