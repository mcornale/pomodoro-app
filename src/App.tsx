import Button from './components/UI/Button';
import Logo from './components/Logo/Logo';
import Timer from './components/Timer/Timer';
import TimerSwitch from './components/Timer/TimerSwitch';
import Modal from './components/Modal/Modal';
import { useEffect } from 'react';
import Notification from './components/Notification/Notification';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { resetTimerNotificationVisibility } from './store/timerSlice';
import { changeSettingsModalState } from './store/modalSlice';
import Icon from './components/Icon/Icon';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const { selectedFont, selectedColor, isTimerNotificationVisible } =
    useAppSelector((state) => state.timer);

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
    if (isTimerNotificationVisible) {
      let timeout = setTimeout(() => {
        dispatch(resetTimerNotificationVisibility());
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isTimerNotificationVisible, dispatch]);

  return (
    <main>
      <Logo />
      <TimerSwitch />
      <Timer />
      <Button onClick={onOpenModalHandler}>
        <Icon settingsIcon />
      </Button>
      <AnimatePresence>
        {isTimerNotificationVisible && <Notification />}
        {isSettingsModalOpen && <Modal />}
      </AnimatePresence>
    </main>
  );
};

export default App;
