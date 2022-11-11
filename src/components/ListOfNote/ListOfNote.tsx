import { useState, useEffect } from "react";
import { DeleteHandler, Todo } from "../../interfaces";
import s from "./ListOfNote.module.css";

interface Props {
  todos: Todo[];
  onClick: DeleteHandler;
}

export const ListOfNote = ({ todos, onClick }: Props) => {
  return (
    <div className={s.container}>
      {todos.map(({ firstName, surName, key }) => (
        <div key={key} className={s.todoBox}>
          <p>{`${firstName} ${surName}`}</p>
          <button type="button" onClick={() => onClick(key)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};
