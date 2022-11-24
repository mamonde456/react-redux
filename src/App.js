import { connect, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import CreatedTodo from "./CreatedTodo";
import Todo from "./Todo";

//redux
// function App({ toDos }) {
function App() {
  const toDos = useSelector((state) => state);
  return (
    <>
      <h1>To Do</h1>
      <CreatedTodo />
      <h3>To Do List</h3>
      <p>localStorage에 저장됩니다.</p>
      <ul>
        {toDos.reducer.map((toDo) => (
          <Todo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
}
/* redux
const mapStateToProps = (state) => {
  return { toDos: state };
};

export default connect(mapStateToProps)(App);
*/
export default App;
