const TIMERS = {
  POMODORO: {
    NAME: 'pomodoro',
    MINUTES: 25,
  },
  SHORT_BREAK: {
    NAME: 'short break',
    MINUTES: 5,
  },
  LONG_BREAK: {
    NAME: 'long break',
    MINUTES: 15,
  },
};

const TIMER_STATUS = {
  COUNTING: 'counting',
  PAUSED: 'paused',
  FINISHED: 'finished',
};

const TIMER_ACTIONS = {
  START: 'start',
  PAUSE: 'pause',
  RESTART: 'restart',
};

const COLORS = {
  ORANGE_RED: '#f87070',
  TEAL: '#70F3F8',
  PURPLE: '#d881f8',
};

const FONTS = {
  KUMBH_SANS: 'Kumbh Sans',
  ROBOTO_SLAB: 'Roboto Slab',
  SPACE_MONO: 'Space Mono',
};

export { TIMERS, TIMER_STATUS, TIMER_ACTIONS, COLORS, FONTS };
