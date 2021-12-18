import { COLORS, FONTS, TIMERS } from '../../constants';
import { useAppDispatch } from '../../store/hooks';
import { changeSettingsModalState } from '../../store/modalSlice';
import CloseIcon from '../Icons/CloseIcon';
import Button from '../UI/Button';
import InputNumber from '../UI/InputNumber';
import InputRadio from '../UI/InputRadio';

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
          <CloseIcon />
        </Button>
      </header>
      <form className={styles.settingsWindowForm}>
        <div>
          <h4 className={styles.settingsWindowInputsTitle}>Time (minutes)</h4>
          <div className={styles.settingsWindowInputsContainer}>
            {Object.entries(TIMERS).map(([timerKey, timerName]) => (
              <InputNumber key={timerKey} label={timerName} />
            ))}
          </div>
        </div>
        <div>
          <h4>Font</h4>
          <div className={styles.settingsWindowInputsContainer}>
            {Object.entries(FONTS).map(([fontKey, fontName]) => (
              <InputRadio fontRadio key={fontKey} fontFamily={fontName} />
            ))}
          </div>
        </div>
        <div>
          <h4>Color</h4>
          <div className={styles.settingsWindowInputsContainer}>
            {Object.entries(COLORS).map(([colorKey, colorHex]) => (
              <InputRadio colorRadio key={colorKey} colorHex={colorHex} />
            ))}
          </div>
        </div>
        <Button type='submit' primary>
          Apply
        </Button>
      </form>
    </section>
  );
};

export default SettingsWindow;
