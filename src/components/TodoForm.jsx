import React, { useState } from 'react';

function TodoForm() {
  const [state, setState] = useState({
    title: '',
    content: '',
  });

  const handleChangeState = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <p>제목</p>
      <input
        type="text"
        name="title"
        value={state.title}
        onChange={handleChangeState}
        placeholder="제목을 입력해주세요"
      ></input>
      <p>내용</p>
      <input
        type="text"
        name="content"
        value={state.content}
        onChange={handleChangeState}
        placeholder="내용을 입력해주세요"
      ></input>
      <button>등록</button>
    </div>
  );
}

export default TodoForm;
