import React, { JSX } from 'react';

export type ButtonProps = {
  className: string;
  onClick: () => void;
  children: () => JSX.Element;
}

const Button: React.FC<ButtonProps> = ({className, children, onClick}) => {
  return (
    <button onClick={() => onClick()} className={'Btn ' + className}>
      {children()}
    </button>
  )
}

export default Button;