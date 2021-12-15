import React from 'react';

type Props = {
  active?: boolean;
  children: string;
};

const Button = (props: Props) => {
  const { children } = props;

  return <button>{children}</button>;
};

export default Button;
