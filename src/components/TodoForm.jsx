import React, { useState, useRef } from 'react';

const TodoForm = ({ addTodos }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const titleInput = useRef();
  const ContentInput = useRef();

  // input에 입력값 없을 시  alert 대신 focus 효과로 대신해보기
  const onSubmit = (e) => {
    e.preventDefault();
    if (title.length < 1) {
      titleInput.current.focus();
      return;
    }

    if (content.length < 1) {
      ContentInput.current.focus();
      return;
    }

    addTodos(title, content);
    // 저장 후 작성 폼 데이터 초기값으로
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>제목</label>
      <input
        type="text"
        name="title"
        value={title}
        ref={titleInput}
        onChange={onChangeTitle}
        placeholder="제목을 입력해주세요"
      ></input>
      <label>내용</label>
      <input
        type="text"
        name="content"
        value={content}
        ref={ContentInput}
        onChange={onChangeContent}
        placeholder="내용을 입력해주세요"
      ></input>
      <button type="submit">등록</button>
    </form>
  );
};

export default TodoForm;
