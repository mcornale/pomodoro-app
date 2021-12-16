import styles from './Button.module.css';

type Props = {
  children: string | JSX.Element;
  primary?: boolean;
  secondary?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  active?: boolean;
  onClick?: () => void;
};

const Button = (props: Props) => {
  const { children, primary, secondary, type, active, onClick } = props;

  return (
    <button
      className={`${styles.button} ${primary ? styles.buttonPrimary : ''} ${
        secondary ? styles.buttonSecondary : ''
      } ${active ? styles.buttonActive : ''}`}
      type={type}
      {...(onClick ? { onClick: onClick.bind(null, children) } : '')}
    >
      {children}
    </button>
  );
};

export default Button;
