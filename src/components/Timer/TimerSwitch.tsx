import { useContext } from 'react';
import { TIMERS } from '../../constants';
import { TimerContext } from '../../store/TimerContext';
import Button from '../UI/Button';

import styles from './TimerSwitch.module.css';

const TimerSwitch = () => {
  const { activeTimer, changeActiveTimer } = useContext(TimerContext);

  const timersEntriesArr = Object.entries(TIMERS);

  const activeTimerIndex = timersEntriesArr.findIndex(
    ([_, timerName]) => timerName === activeTimer
  );

  return (
    <nav className={styles.timerSwitch}>
      <div
        className={styles.timerSwitchActiveBackground}
        style={{
          width: `calc(100% / ${timersEntriesArr.length})`,
          transform: `translate(calc(100% * ${activeTimerIndex}), -50%)`,
        }}
      ></div>
      {timersEntriesArr.map(([timerKey, timerName]) => (
        <Button
          key={timerKey}
          active={timerName === activeTimer ? true : false}
          secondary
          onClick={changeActiveTimer}
        >
          {timerName}
        </Button>
      ))}
    </nav>
  );
};

export default TimerSwitch;
