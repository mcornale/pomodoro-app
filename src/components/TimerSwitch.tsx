import Button from './Button';

import styles from './TimerSwitch.module.css';

const TimerSwitch = () => {
  return (
    <nav className={styles.timerSwitch}>
      <Button>pomodoro</Button>
      <Button>short break</Button>
      <Button>long break</Button>
    </nav>
  );
};

export default TimerSwitch;
