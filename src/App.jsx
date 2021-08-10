import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["うううう"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  return (
    <>
      <div className="input-area">
        <input
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="area-title">未完了のTODO</p>
        <ul className="list-row">
          {incompleteTodos.map((todo) => {
            return (
              <li key="{todo">
                <span>{todo}</span>
                <button>完了</button>
                <button>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="area-title">完了のTODO</p>
        <ul className="list-row">
          {completeTodos.map((todo) => {
            return (
              <li key="{todo">
                <span>{todo}</span>
                <button>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
