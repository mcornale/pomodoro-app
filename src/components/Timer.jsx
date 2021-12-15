import ProgressBar from './ProgressBar';
import styles from './Timer.module.css';

const Timer = () => {
  return (
    <div className={styles.timer}>
      <ProgressBar />
      <h1 className={styles.timerValue}>00:00</h1>
      <h3>Restart</h3>
    </div>
  );
};

export default Timer;
