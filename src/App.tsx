import Button from './components/Button';
import Logo from './components/Logo';
import Timer from './components/Timer';
import TimerSwitch from './components/TimerSwitch';
import settingsIconSrc from './assets/icon-settings.svg';
import Modal from './components/Modal';

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
