import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid white;
  &:hover {
    background-color: #558f69;
  }
`;

function BaseButton({ children, onClick }) {
  const handleClick = () => {
    onClick && onClick();
  }

  return (
    <StyledButton onClick={handleClick}>{children}</StyledButton>
  );
}

export default BaseButton;
//NOTE - 스타일된 컴포넌트에 onclick 속성을 넣고싶을 땐 여기에 onclick 속성을 넣어줘야함
