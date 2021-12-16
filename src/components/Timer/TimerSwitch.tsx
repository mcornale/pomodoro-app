import { useContext } from 'react';
import { TIMERS } from '../../constants';
import { TimerContext } from '../../store/TimerContext';
import Button from '../UI/Button';

import styles from './TimerSwitch.module.css';

const TimerSwitch = () => {
  const { activeTimer, changeActiveTimer } = useContext(TimerContext);

  return (
    <nav className={styles.timerSwitch}>
      {Object.entries(TIMERS).map(([timerKey, timerName]) => (
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
