import { useAppSelector } from '../../store/hooks';

import styles from './Notification.module.css';

const Notification = () => {
  const { timerNotification } = useAppSelector((state) => state.timer);

  return (
    <div className={styles.notification}>
      <p>{timerNotification}</p>
    </div>
  );
};

export default Notification;
