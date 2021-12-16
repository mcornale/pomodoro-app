import styles from './Button.module.css';

type Props = {
  children: string | JSX.Element;
  primary?: boolean;
  secondary?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

const Button = (props: Props) => {
  const { children, primary, secondary, type } = props;

  return (
    <button
      className={`${styles.button} ${primary ? styles.buttonPrimary : ''} ${
        secondary ? styles.buttonSecondary : ''
      }`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
