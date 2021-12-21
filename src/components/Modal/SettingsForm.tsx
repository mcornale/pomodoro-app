import { FormEvent, useCallback, useRef, useState } from 'react';
import { COLORS, FONTS, TIMERS, TIMER_STATUS } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeSettingsModalState } from '../../store/modalSlice';
import {
  updateActiveTimerTotalMinutes,
  updateSettings,
} from '../../store/timerSlice';
import Button from '../UI/Button';
import InputNumber from '../UI/InputNumber';
import InputRadio from '../UI/InputRadio';

import styles from './SettingsForm.module.css';

const SettingsForm = () => {
  const {
    pomodoroMinutes,
    shortBreakMinutes,
    longBreakMinutes,
    selectedFont,
    selectedColor,
    activeTimer,
    timerStatus,
  } = useAppSelector((state) => state.timer);

  const dispatch = useAppDispatch();

  const [checkedFont, setCheckedFont] = useState(selectedFont);
  const [checkedColor, setCheckedColor] = useState(selectedColor);

  const pomodoroInputRef = useRef<HTMLInputElement>(null);
  const shortBreakInputRef = useRef<HTMLInputElement>(null);
  const longBreakInputRef = useRef<HTMLInputElement>(null);

  const chooseInputNumberValue = useCallback(
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

  const changeCheckedFontHandler = (newCheckedFont: string) => {
    setCheckedFont(newCheckedFont);
  };

  const changeCheckedColorHandler = (newCheckedColor: string) => {
    setCheckedColor(newCheckedColor);
  };

  const onSubmitFormHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newPomodoroMinutes = pomodoroInputRef.current!.value;
    const newShortBreakMinutes = shortBreakInputRef.current!.value;
    const newLongBreakMinutes = longBreakInputRef.current!.value;
    const newSelectedFont = checkedFont;
    const newSelectedColor = checkedColor;

    dispatch(
      updateSettings({
        newPomodoroMinutes: parseInt(newPomodoroMinutes),
        newShortBreakMinutes: parseInt(newShortBreakMinutes),
        newLongBreakMinutes: parseInt(newLongBreakMinutes),
        newSelectedFont,
        newSelectedColor,
      })
    );
    dispatch(updateActiveTimerTotalMinutes());
    dispatch(changeSettingsModalState());
  };

  return (
    <form onSubmit={onSubmitFormHandler} className={styles.settingsForm}>
      <div>
        <h4 className={styles.settingsFormInputsTitle}>Time (minutes)</h4>
        <div className={styles.settingsFormInputsContainer}>
          {Object.entries(TIMERS).map(([timerKey, timerValue]) => {
            let inputTimerRef;
            let shouldBeDisabled = false;

            if (timerValue.NAME === 'pomodoro')
              inputTimerRef = pomodoroInputRef;
            if (timerValue.NAME === 'short break')
              inputTimerRef = shortBreakInputRef;
            if (timerValue.NAME === 'long break')
              inputTimerRef = longBreakInputRef;

            if (
              timerStatus === TIMER_STATUS.COUNTING &&
              activeTimer === timerValue.NAME
            )
              shouldBeDisabled = true;

            return (
              <InputNumber
                key={timerKey}
                id={timerKey}
                label={timerValue.NAME}
                value={chooseInputNumberValue(timerValue.NAME)}
                ref={inputTimerRef}
                disabled={shouldBeDisabled}
              />
            );
          })}
        </div>
        {timerStatus === TIMER_STATUS.COUNTING && (
          <p className={styles.settingsFormAlert}>
            The {activeTimer} timer is running. You cannot change its value
          </p>
        )}
      </div>
      <div>
        <h4 className={styles.settingsFormInputsTitle}> Font</h4>
        <div className={styles.settingsFormInputsContainer}>
          {Object.entries(FONTS).map(([fontKey, fontName]) => (
            <InputRadio
              fontRadio
              key={fontKey}
              id={fontKey}
              name='fonts'
              fontFamily={fontName}
              checked={fontName === checkedFont}
              onChangeChecked={changeCheckedFontHandler.bind(null, fontName)}
            />
          ))}
        </div>
      </div>
      <div>
        <h4 className={styles.settingsFormInputsTitle}>Color</h4>
        <div className={styles.settingsFormInputsContainer}>
          {Object.entries(COLORS).map(([colorKey, colorHex]) => (
            <InputRadio
              colorRadio
              key={colorKey}
              name='colors'
              id={colorKey}
              colorHex={colorHex}
              checked={colorHex === checkedColor}
              onChangeChecked={changeCheckedColorHandler.bind(null, colorHex)}
            />
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
