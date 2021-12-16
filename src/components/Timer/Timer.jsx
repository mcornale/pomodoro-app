import { useContext, useEffect, useState, useCallback } from 'react';
import { TIMERS, TIMER_ACTIONS, TIMER_STATUS } from '../../constants';
import { TimerContext } from '../../store/TimerContext';
import Button from '../UI/Button';
import ProgressBar from './ProgressBar';
import styles from './Timer.module.css';

const Timer = () => {
  const {
    pomodoroMinutes,
    shortBreakMinutes,
    longBreakMinutes,
    activeTimer,
    timerStatus,
    changeTimerStatus,
  } = useContext(TimerContext);

  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  const chooseMinutes = useCallback(() => {
    if (activeTimer === TIMERS.POMODORO) return pomodoroMinutes;
    if (activeTimer === TIMERS.SHORT_BREAK) return shortBreakMinutes;
    if (activeTimer === TIMERS.LONG_BREAK) return longBreakMinutes;
  }, [activeTimer, pomodoroMinutes, shortBreakMinutes, longBreakMinutes]);

  useEffect(() => {
    setTimerMinutes(chooseMinutes());
    setTimerSeconds(0);
  }, [activeTimer, chooseMinutes]);

  useEffect(() => {
    if (timerStatus === TIMER_STATUS.COUNTING) {
      if (timerMinutes === 0 && timerSeconds === 0) {
        changeTimerStatus(TIMER_STATUS.FINISHED);
        return;
      }

      let interval = setInterval(() => {
        if (timerSeconds === 0)
          setTimerMinutes((prevTimerMinutes) => prevTimerMinutes - 1);

        setTimerSeconds((prevTimerSeconds) =>
          prevTimerSeconds === 0 ? 59 : prevTimerSeconds - 1
        );
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [timerMinutes, timerSeconds, changeTimerStatus, timerStatus]);

  const percentage =
    ((timerMinutes * 60 + timerSeconds) / (pomodoroMinutes * 60)) * 100;

  return (
    <div className={styles.timerContainer}>
      <div className={styles.timer}>
        <ProgressBar percentage={percentage} />
        <h1 className={styles.timerValue}>
          {timerMinutes.toString().padStart(2, '0')}:
          {timerSeconds.toString().padStart(2, '0')}
        </h1>
        <Button onClick={changeTimerStatus.bind(null, null)}>
          <h3>{TIMER_ACTIONS[timerStatus]}</h3>
        </Button>
      </div>
    </div>
  );
};

export default Timer;
