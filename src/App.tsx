import Button from './components/UI/Button';
import Logo from './components/Logo';
import Timer from './components/Timer/Timer';
import TimerSwitch from './components/Timer/TimerSwitch';
import settingsIconSrc from './assets/icon-settings.svg';
import Modal from './components/Modal/Modal';
import { useContext } from 'react';
import { TimerContext } from './store/TimerContext';

const App = () => {
  const { fontSelected, colorSelected } = useContext(TimerContext);

  document.documentElement.style.setProperty(
    '--font-selected',
    `'${fontSelected}', sans-serif`
  );

  document.documentElement.style.setProperty('--color-selected', colorSelected);

  return (
    <main>
      <Logo />
      <TimerSwitch />
      <Timer />
      <Button>
        <img src={settingsIconSrc} alt='settings icon' />
      </Button>
      {/* <Modal /> */}
    </main>
  );
};

export default App;
