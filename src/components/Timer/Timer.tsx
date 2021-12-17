import { useEffect, useCallback } from 'react';
import { TIMER_ACTIONS, TIMER_STATUS } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  changeTimerStatus,
  changeTimerValues,
  updateActiveTimerTotalMinutes,
} from '../../store/timerSlice';
import Button from '../UI/Button';
import ProgressBar from './ProgressBar';
import styles from './Timer.module.css';

const Timer = () => {
  const { timerMinutes, timerSeconds, timerStatus, totalMinutesActiveTimer } =
    useAppSelector((state) => state.timer);

  const dispatch = useAppDispatch();

  const chooseTimerAction = useCallback(() => {
    if (timerStatus === TIMER_STATUS.PAUSED) return TIMER_ACTIONS.START;
    if (timerStatus === TIMER_STATUS.COUNTING) return TIMER_ACTIONS.PAUSE;
    if (timerStatus === TIMER_STATUS.FINISHED) return TIMER_ACTIONS.RESTART;
  }, [timerStatus]);

  useEffect(() => {
    if (timerStatus === TIMER_STATUS.COUNTING) {
      if (timerMinutes === 0 && timerSeconds === 0) {
        dispatch(changeTimerStatus(TIMER_STATUS.FINISHED));
        return;
      }

      let interval = setInterval(() => {
        dispatch(changeTimerValues());
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [timerMinutes, timerSeconds, timerStatus, dispatch]);

  const onChangeTimerStatusHandler = () => {
    if (timerStatus === TIMER_STATUS.COUNTING)
      dispatch(changeTimerStatus(TIMER_STATUS.PAUSED));
    if (timerStatus === TIMER_STATUS.PAUSED)
      dispatch(changeTimerStatus(TIMER_STATUS.COUNTING));
    if (timerStatus === TIMER_STATUS.FINISHED)
      dispatch(updateActiveTimerTotalMinutes());
  };

  const percentage =
    ((timerMinutes * 60 + timerSeconds) / (totalMinutesActiveTimer * 60)) * 100;

  return (
    <div className={styles.timerContainer}>
      <div className={styles.timer}>
        <ProgressBar percentage={percentage === 0 ? 100 : percentage} />
        <h1 className={styles.timerValue}>
          {timerMinutes.toString().padStart(2, '0')}:
          {timerSeconds.toString().padStart(2, '0')}
        </h1>
        <Button onClick={onChangeTimerStatusHandler.bind(null)}>
          <h3>{chooseTimerAction()}</h3>
        </Button>
      </div>
    </div>
  );
};

export default Timer;
