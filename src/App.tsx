import Button from './components/UI/Button';
import Logo from './components/Logo';
import Timer from './components/Timer/Timer';
import TimerSwitch from './components/Timer/TimerSwitch';
import settingsIconSrc from './assets/icon-settings.svg';
import Modal from './components/Modal/Modal';
import { useContext, useEffect } from 'react';
import { TimerContext } from './store/TimerContext';
import Notification from './components/Notification/Notification';

const App = () => {
  const {
    selectedFont,
    selectedColor,
    timerNotification,
    setTimerNotification,
  } = useContext(TimerContext);

  document.documentElement.style.setProperty(
    '--font-selected',
    `'${selectedFont}', sans-serif`
  );

  document.documentElement.style.setProperty('--color-selected', selectedColor);

  useEffect(() => {
    if (timerNotification) {
      let timeout = setTimeout(() => {
        setTimerNotification(null);
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [timerNotification, setTimerNotification]);

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
