import { TIMERS } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  changeActiveTimer,
  updateActiveTimerTotalMinutes,
} from '../../store/timerSlice';
import Button from '../UI/Button';

import styles from './TimerSwitch.module.css';

const TimerSwitch = () => {
  const { activeTimer } = useAppSelector((state) => state.timer);
  const dispatch = useAppDispatch();

  const timersEntriesArr = Object.entries(TIMERS);

  const activeTimerIndex = timersEntriesArr.findIndex(
    ([_, timerValue]) => timerValue.NAME === activeTimer
  );

  const onChangeActiveTimerHandler = (timerName: string) => {
    dispatch(changeActiveTimer(timerName));
    dispatch(updateActiveTimerTotalMinutes());
  };

  return (
    <nav className={styles.timerSwitch}>
      <div
        className={styles.timerSwitchActiveBackground}
        style={{
          width: `calc(100% / ${timersEntriesArr.length})`,
          transform: `translate(calc(100% * ${activeTimerIndex}), -50%)`,
        }}
      ></div>
      {timersEntriesArr.map(([timerKey, timerValue]) => (
        <Button
          key={timerKey}
          active={timerValue.NAME === activeTimer ? true : false}
          secondary
          onClick={onChangeActiveTimerHandler.bind(null, timerValue.NAME)}
        >
          {timerValue.NAME}
        </Button>
      ))}
    </nav>
  );
};

export default TimerSwitch;
