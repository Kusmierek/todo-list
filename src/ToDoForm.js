import { useState } from "react";
import ToDo from "./ToDo";

const TooDooForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleDelete = (id) => {
    const newToDoList = toDoList.filter((todo) => todo.id !== id);
    setToDoList(newToDoList);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let id = toDoList.length + 1;
    const toDo = { id, title, description };
    toDoList.push(toDo);
    setToDoList(toDoList);
    id++;
    console.log(toDoList);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="content">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Description:</label>
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button>Add quest...</button>
        </form>
      </div>

      <div className="todos">
        <ToDo todos={toDoList} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default TooDooForm;
