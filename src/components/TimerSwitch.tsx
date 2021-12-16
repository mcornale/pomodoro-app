import Button from './Button';

import styles from './TimerSwitch.module.css';

const TimerSwitch = () => {
  return (
    <nav className={styles.timerSwitch}>
      <Button secondary>pomodoro</Button>
      <Button secondary>short break</Button>
      <Button secondary>long break</Button>
    </nav>
  );
};

export default TimerSwitch;
