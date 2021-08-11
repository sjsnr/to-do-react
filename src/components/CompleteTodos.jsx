import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="area-title">完了のTODO</p>
      <ul className="list-row">
        {todos.map((todo, index) => {
          return (
            <li key="{todo">
              <span>{todo}</span>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
