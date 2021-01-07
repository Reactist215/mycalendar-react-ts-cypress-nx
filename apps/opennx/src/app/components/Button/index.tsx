import React, { FC } from 'react';
import styled from 'styled-components';

type IProps = {
  title: string;
  onClick: () => void;
};

const StyledButton = styled.button`
  background: #228adc;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 1px 2px -1px black;
  :hover {
    box-shadow: none;
  }
  &.active {
    box-shadow: none;
  }
`;
const Button: FC<IProps> = ({ title, onClick, children }) => {
  return (
    <StyledButton type="button" onClick={onClick} title={title}>
      {children}
    </StyledButton>
  );
};

export default Button;
