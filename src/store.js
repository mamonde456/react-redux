import { combineReducers, createStore } from "redux";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "todos",
  storage,
  whitelist: ["auth"],
};

const ADD = "ADD";
const DELETE = "DELETE";

export const addTodoAction = (text) => {
  return {
    type: ADD,
    text,
  };
};

export const deleteTodoAction = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reducer,
});

const store = createStore(persistReducer(persistConfig, rootReducer));
export const persistor = persistStore(store);
export default store;
