import Button from './components/Button';
import Logo from './components/Logo';
import Timer from './components/Timer';
import TimerSwitch from './components/TimerSwitch';
import settingsIconSrc from './assets/icon-settings.svg';

const App = () => {
  return (
    <main>
      <Logo />
      <TimerSwitch />
      <Timer />
      <Button noOpacity>
        <img src={settingsIconSrc} alt='settings icon' />
      </Button>
    </main>
  );
};

export default App;
