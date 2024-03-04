interface Props {
  type: 'button' | 'submit' | 'reset' | undefined;
  className: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<Props> = (props) => {
  const { children, ...rest } = props;

  return <button {...rest}>{children}</button>;
};
