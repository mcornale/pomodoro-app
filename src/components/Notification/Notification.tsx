import { motion } from 'framer-motion';

import styles from './Notification.module.css';

const Notification = () => {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: '-50%' }}
      exit={{ y: '100%' }}
      transition={{ type: 'tween', duration: 0.7, ease: 'backOut' }}
      className={styles.notification}
    >
      <p>A timer is running. Pause it to change mode</p>
    </motion.div>
  );
};

export default Notification;
