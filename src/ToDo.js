import { XCircle } from "phosphor-react";
import { setToDoList } from "./ToDoForm";

const TooDoo = ({ todos, handleDelete }) => {
  console.log(todos);
  return (
    <div className="notes">
      {todos.map((todo) => (
        <div className="note">
          <XCircle
            size={32}
            className="xcircle"
            onClick={() => handleDelete(todo.id)}
          />
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TooDoo;
