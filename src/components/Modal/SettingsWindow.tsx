import CloseIcon from '../Icons/CloseIcon';
import Button from '../UI/Button';
import InputNumber from '../UI/InputNumber';
import InputRadio from '../UI/InputRadio';

import styles from './SettingsWindow.module.css';

const SettingsWindow = () => {
  return (
    <section className={styles.settingsWindow}>
      <header className={styles.settingsWindowHeader}>
        <h2>Settings</h2>
        <CloseIcon />
      </header>
      <form className={styles.settingsWindowForm}>
        <div>
          <h4 className={styles.settingsWindowInputsTitle}>Time (minutes)</h4>
          <div className={styles.settingsWindowInputsContainer}>
            <InputNumber />
            <InputNumber />
            <InputNumber />
          </div>
        </div>
        <div>
          <h4>Font</h4>
          <div className={styles.settingsWindowInputsContainer}>
            <InputRadio fontRadio />
            <InputRadio fontRadio />
            <InputRadio fontRadio />
          </div>
        </div>
        <div>
          <h4>Color</h4>
          <div className={styles.settingsWindowInputsContainer}>
            <InputRadio colorRadio />
            <InputRadio colorRadio />
            <InputRadio colorRadio />
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
