import { TIMER_STATUS } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeTimerStatus } from '../../store/timerSlice';
import Button from '../UI/Button';

import styles from './Notification.module.css';

const Notification = () => {
  const { timerNotification } = useAppSelector((state) => state.timer);
  const dispatch = useAppDispatch();

  const onConsumeTimerValuesHandler = () => {
    dispatch(changeTimerStatus(TIMER_STATUS.PAUSED));
  };

  return (
    <div className={styles.notification}>
      <p>{timerNotification}</p>
      <Button onClick={onConsumeTimerValuesHandler} notification>
        Pause timer
      </Button>
    </div>
  );
};

export default Notification;
