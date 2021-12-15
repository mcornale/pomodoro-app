import styles from './Button.module.css';

type Props = {
  children: string | JSX.Element;
  noOpacity?: boolean;
};

const Button = (props: Props) => {
  const { children, noOpacity } = props;

  return (
    <button
      className={`${styles.button} ${
        noOpacity ? styles.buttonNoOpacity : styles.buttonOpacity
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
