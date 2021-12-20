import { useAppDispatch } from '../../store/hooks';
import { changeSettingsModalState } from '../../store/modalSlice';
import Icon from '../Icon/Icon';
import Button from '../UI/Button';
import SettingsForm from './SettingsForm';
import { motion } from 'framer-motion';

import styles from './SettingsWindow.module.css';

const SettingsWindow = () => {
  const dispatch = useAppDispatch();

  const onCloseModalHandler = () => {
    dispatch(changeSettingsModalState());
  };

  return (
    <motion.section
      initial={{ x: '-50%', y: 'calc(100vh - 50%)' }}
      animate={{ x: '-50%', y: '-50%' }}
      exit={{ x: '-50%', y: 'calc(100vh - 50%)' }}
      transition={{ type: 'tween', duration: 0.7, ease: 'backOut' }}
      className={styles.settingsWindow}
    >
      <header className={styles.settingsWindowHeader}>
        <h2>Settings</h2>
        <Button onClick={onCloseModalHandler}>
          <Icon closeIcon />
        </Button>
      </header>
      <SettingsForm />
    </motion.section>
  );
};

export default SettingsWindow;
