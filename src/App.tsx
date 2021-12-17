import Button from './components/UI/Button';
import Logo from './components/Logo';
import Timer from './components/Timer/Timer';
import TimerSwitch from './components/Timer/TimerSwitch';
import settingsIconSrc from './assets/icon-settings.svg';
import Modal from './components/Modal/Modal';
import { useEffect, useState } from 'react';
import Notification from './components/Notification/Notification';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { resetTimerNotification } from './store/timerSlice';

const App = () => {
  const { selectedFont, selectedColor, timerNotification } = useAppSelector(
    (state) => state.timer
  );

  const dispatch = useAppDispatch();

  document.documentElement.style.setProperty(
    '--font-selected',
    `'${selectedFont}', sans-serif`
  );

  document.documentElement.style.setProperty('--color-selected', selectedColor);

  useEffect(() => {
    if (timerNotification) {
      let timeout = setTimeout(() => {
        dispatch(resetTimerNotification());
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [timerNotification, dispatch]);

  return (
    <main>
      <Logo />
      <TimerSwitch />
      <Timer />
      <Button>
        <img src={settingsIconSrc} alt='settings icon' />
      </Button>
      {timerNotification && <Notification />}
      {/* <Modal /> */}
    </main>
  );
};

export default App;
