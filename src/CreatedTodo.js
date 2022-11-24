import { connect, useDispatch, useSelector } from "react-redux";
import { useContext, useState } from "react";
import { TodoContext } from "./App";
import { addTodoAction } from "./store";

// const CreatedTodo = ({ addTodo }) => {
const CreatedTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    setText(e.currentTarget.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodoAction(text));
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={text} />
        <input type="submit" value="send" />
      </form>
    </div>
  );
};

/* redux
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(addTodoAction(text)),
  };
};
*/
export default CreatedTodo;
// export default connect(null, mapDispatchToProps)(CreatedTodo);
