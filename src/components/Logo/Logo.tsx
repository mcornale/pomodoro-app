import logoSrc from '../../assets/logo.svg';

import styles from './Logo.module.css';

const Logo = () => {
  return <img className={styles.logo} src={logoSrc} alt='pomodoro logo' />;
};

export default Logo;
