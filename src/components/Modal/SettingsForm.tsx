import { useCallback } from 'react';
import { COLORS, FONTS, TIMERS } from '../../constants';
import { useAppSelector } from '../../store/hooks';
import Button from '../UI/Button';
import InputNumber from '../UI/InputNumber';
import InputRadio from '../UI/InputRadio';

import styles from './SettingsForm.module.css';

const SettingsForm = () => {
  const { pomodoroMinutes, shortBreakMinutes, longBreakMinutes } =
    useAppSelector((state) => state.timer);

  const chooseInputNumberValues = useCallback(
    (timerName) => {
      let choosenInputNumberValue = 0;

      if (timerName === TIMERS.POMODORO.NAME)
        choosenInputNumberValue = pomodoroMinutes;
      if (timerName === TIMERS.SHORT_BREAK.NAME)
        choosenInputNumberValue = shortBreakMinutes;
      if (timerName === TIMERS.LONG_BREAK.NAME)
        choosenInputNumberValue = longBreakMinutes;

      return choosenInputNumberValue;
    },
    [pomodoroMinutes, shortBreakMinutes, longBreakMinutes]
  );

  return (
    <form className={styles.settingsForm}>
      <div>
        <h4 className={styles.settingsFormInputsTitle}>Time (minutes)</h4>
        <div className={styles.settingsFormInputsContainer}>
          {Object.entries(TIMERS).map(([timerKey, timerValue]) => (
            <InputNumber
              key={timerKey}
              label={timerValue.NAME}
              value={chooseInputNumberValues(timerValue.NAME)}
            />
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
