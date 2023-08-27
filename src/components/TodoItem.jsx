import React from 'react';

const TodoItem = ({ todo, deleteHandler, doneHandler }) => {
  // const { id, title, content, done } = todo;

  return (
    <div className="todo-item">
      <div className="item-contents">
        <h3>
          {todo.title}
          <p>{todo.content}</p>
        </h3>
      </div>
      <div className="item-buttons">
        <button className="del-btn" onClick={() => deleteHandler(todo.id)}>
          삭제
        </button>
        {/* 기능구현 시 DONE상태에 따라 취소/ 완료로 구분 */}
        {todo.done ? (
          <button className="cancel-btn" onClick={() => doneHandler(todo.id)}>
            취소
          </button>
        ) : (
          <button className="done-btn" onClick={() => doneHandler(todo.id)}>
            완료
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
