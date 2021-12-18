import Button from './components/UI/Button';
import Logo from './components/Logo';
import Timer from './components/Timer/Timer';
import TimerSwitch from './components/Timer/TimerSwitch';
import Modal from './components/Modal/Modal';
import { useEffect } from 'react';
import Notification from './components/Notification/Notification';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { resetTimerNotification } from './store/timerSlice';
import { changeSettingsModalState } from './store/modalSlice';
import Icon from './components/Icon';

const App = () => {
  const { selectedFont, selectedColor, timerNotification } = useAppSelector(
    (state) => state.timer
  );

  const { isSettingsModalOpen } = useAppSelector((state) => state.modal);

  const dispatch = useAppDispatch();

  document.documentElement.style.setProperty(
    '--font-selected',
    `'${selectedFont}', sans-serif`
  );

  document.documentElement.style.setProperty('--color-selected', selectedColor);

  const onOpenModalHandler = () => {
    dispatch(changeSettingsModalState());
  };

  useEffect(() => {
    if (timerNotification) {
      let timeout = setTimeout(() => {
        dispatch(resetTimerNotification());
      }, 4000);

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
      <Button onClick={onOpenModalHandler}>
        <Icon settingsIcon />
      </Button>
      {timerNotification && <Notification />}
      {isSettingsModalOpen && <Modal />}
    </main>
  );
};

export default App;
