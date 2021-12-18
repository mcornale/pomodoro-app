import { COLORS, FONTS, TIMERS } from '../../constants';
import Button from '../UI/Button';
import InputNumber from '../UI/InputNumber';
import InputRadio from '../UI/InputRadio';

import styles from './SettingsForm.module.css';

const SettingsForm = () => {
  return (
    <form className={styles.settingsForm}>
      <div>
        <h4 className={styles.settingsFormInputsTitle}>Time (minutes)</h4>
        <div className={styles.settingsFormInputsContainer}>
          {Object.entries(TIMERS).map(([timerKey, timerName]) => (
            <InputNumber key={timerKey} label={timerName} />
          ))}
        </div>
      </div>
      <div>
        <h4>Font</h4>
        <div className={styles.settingsFormInputsContainer}>
          {Object.entries(FONTS).map(([fontKey, fontName]) => (
            <InputRadio fontRadio key={fontKey} fontFamily={fontName} />
          ))}
        </div>
      </div>
      <div>
        <h4>Color</h4>
        <div className={styles.settingsFormInputsContainer}>
          {Object.entries(COLORS).map(([colorKey, colorHex]) => (
            <InputRadio colorRadio key={colorKey} colorHex={colorHex} />
          ))}
        </div>
      </div>
      <Button type='submit' primary>
        Apply
      </Button>
    </form>
  );
};

export default SettingsForm;
