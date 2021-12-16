import closeIconSrc from '../assets/icon-close.svg';
import Button from './Button';

import styles from './SettingsWindow.module.css';

const SettingsWindow = () => {
  return (
    <section className={styles.settingsWindow}>
      <header className={styles.settingsWindowHeader}>
        <h2>Settings</h2>
        <img src={closeIconSrc} alt='close icon' />
      </header>
      <form className={styles.settingsWindowForm}>
        <div>
          <h4>Time (minutes)</h4>
          <div>
            <div>
              <label>pomodoro</label>
              <input type='number' />
            </div>
            <div>
              <label>short break</label>
              <input type='number' />
            </div>
            <div>
              <label>long break</label>
              <input type='number' />
            </div>
          </div>
        </div>
        <div>
          <h4>Font</h4>
          <div>
            <input type='radio' />
            <input type='radio' />
            <input type='radio' />
          </div>
        </div>
        <div>
          <h4>Color</h4>
          <div>
            <input type='radio' />
            <input type='radio' />
            <input type='radio' />
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
