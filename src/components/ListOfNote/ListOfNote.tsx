import * as React from "react";
import { Todo } from "../../interfaces";

interface Props {
  todos: Todo[];
}

export const ListOfNote = ({ todos }: Props) => {
  return (
    <>
      {todos.map(({ firstName, surName, key }) => (
        <p key={key}>{`${firstName} ${surName}`}</p>
      ))}
    </>
  );
};
