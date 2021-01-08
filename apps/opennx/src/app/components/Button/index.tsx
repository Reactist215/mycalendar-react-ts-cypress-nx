import React, { FC } from 'react';
import styled from 'styled-components';

type IProps = {
  title?: string;
  onClick?: () => void;
  className?: string;
};

const StyledButton = styled.button`
  background: #228adc;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  outline: none;

  :hover {
    background: coral;
  }
  &.active {
    background: coral;
  }
`;

const Button: FC<IProps> = ({
  title = '',
  onClick,
  className = '',
  children,
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      className={className}
      title={title}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
