import styles from './Button.module.css';

type Props = {
  children: string | JSX.Element;
  primary?: boolean;
  secondary?: boolean;
  notification?: boolean;
  type?: 'submit' | undefined;
  active?: boolean;
  arrow?: boolean;
  onClick?: () => void;
};

const Button = (props: Props) => {
  const {
    children,
    primary,
    secondary,
    notification,
    type,
    active,
    arrow,
    onClick,
  } = props;

  return (
    <button
      className={`${styles.button} ${primary ? styles.buttonPrimary : ''} ${
        secondary ? styles.buttonSecondary : ''
      } ${active ? styles.buttonActive : ''} ${
        notification ? styles.buttonNotification : ''
      } ${arrow ? styles.buttonArrow : ''}`}
      type={type ? type : 'button'}
      {...(onClick ? { onClick: onClick } : '')}
    >
      {children}
    </button>
  );
};

export default Button;
