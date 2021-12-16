import Button from './components/UI/Button';
import Logo from './components/Logo';
import Timer from './components/Timer/Timer';
import TimerSwitch from './components/Timer/TimerSwitch';
import settingsIconSrc from './assets/icon-settings.svg';
import Modal from './components/Modal/Modal';

const App = () => {
  return (
    <main>
      <Logo />
      <TimerSwitch />
      <Timer />
      <Button>
        <img src={settingsIconSrc} alt='settings icon' />
      </Button>
      <Modal />
    </main>
  );
};

export default App;
