import 'style.css';
import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;

  width: 800px;
  max-width: 1200px;
  min-height: 800px;

  background: #f9f7f7;
  border-radius: 15px;
  box-shadow: 0 0 10px 3px rgba(75, 102, 130, 0.3);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
  margin-top: 40px;
  margin-bottom: 30px;
  padding: 30px;
`;

const TodoTemplate = ({ children }) => {
  return (
    <TodoTemplateBlock>
      <h1 className="template-title">
        TODO LIST<i className="template-logo"></i>
      </h1>
      {children}
    </TodoTemplateBlock>
  );
};

export default TodoTemplate;
