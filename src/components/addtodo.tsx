"use client";
import react, { FormEvent, useState } from "react";

export const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Write your to do...."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};
