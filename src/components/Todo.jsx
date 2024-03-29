import { useState } from "react";

export function Todo({ todo, handleDelete, togleComplete, handleEdit }) {
  const [newTitle, setNewTitle] = useState(todo.title);
  const handleChange =(e) => {
    if (todo.complete == true) {
      setNewTitle(todo.tile);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };

  return (
    <div className="todo">
      <input
        style={{ textDecoration: todo.complete && "line-through" }}
        value={todo.title == "" ? newTitle : todo.title}
        onChange={handleChange}
      />
      <div>
        <button className="button-complete" onClick={() => togleComplete(todo)}>
          Marcar
        </button>
        <button className="button-edit" onClick={() => handleEdit(todo, newTitle)}>Editar</button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>Eliminar</button>
      </div>
    </div>
  );
}
