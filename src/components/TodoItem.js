import React from "react";
import { Button } from "antd";

function TodoItem(props) {
    

  return (
    <div className="todo-item">
      {props.item}
      <Button onClick={} className="del-btn">삭제하기</Button>
    </div>
  );
}

export default TodoItem;
