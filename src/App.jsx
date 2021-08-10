import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="area-title">未完了のTODO</p>
        <ul className="list-row">
          <li>
            <span>aaa</span>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
      <div className="complete-area">
        <p className="area-title">完了のTODO</p>
        <ul className="list-row">
          <li>
            <span>aaa</span>
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </>
  );
};
