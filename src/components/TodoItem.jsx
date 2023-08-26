import React from 'react';

function TodoItem() {
  return (
    <div>
      <div>
        <h3>타이틀 들어올곳</h3>
        <p>내용 들어올 곳</p>
      </div>
      <div>
        <button>삭제하기</button>
        {/* 기능구현 시 상태에 따라 취소/ 완료로 구분 */}
        <button>취소</button>
      </div>
    </div>
  );
}

export default TodoItem;
