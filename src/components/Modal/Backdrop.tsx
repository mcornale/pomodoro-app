import { motion } from 'framer-motion';

import styles from './Backdrop.module.css';

const Backdrop = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0 }}
      className={styles.backdrop}
    ></motion.div>
  );
};

export default Backdrop;
