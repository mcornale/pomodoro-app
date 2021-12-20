import { useAppDispatch } from '../../store/hooks';
import { changeSettingsModalState } from '../../store/modalSlice';
import Icon from '../Icon/Icon';
import Button from '../UI/Button';
import SettingsForm from './SettingsForm';

import styles from './SettingsWindow.module.css';

const SettingsWindow = () => {
  const dispatch = useAppDispatch();

  const onCloseModalHandler = () => {
    dispatch(changeSettingsModalState());
  };

  return (
    <section className={styles.settingsWindow}>
      <header className={styles.settingsWindowHeader}>
        <h2>Settings</h2>
        <Button onClick={onCloseModalHandler}>
          <Icon closeIcon />
        </Button>
      </header>
      <SettingsForm />
    </section>
  );
};

export default SettingsWindow;
