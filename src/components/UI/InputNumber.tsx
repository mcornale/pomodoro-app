import ArrowDownIcon from '../Icons/ArrowDownIcon';
import ArrowUpIcon from '../Icons/ArrowUpIcon';

import styles from './InputNumber.module.css';

const InputNumber = () => {
  return (
    <div>
      <label className={styles.inputNumberLabel}>pomodoro</label>
      <div className={styles.inputNumberContainer}>
        <input className={styles.inputNumber} type='number' min='0' value={0} />
        <div className={styles.inputNumberArrows}>
          <ArrowUpIcon />
          <ArrowDownIcon />
        </div>
      </div>
    </div>
  );
};

export default InputNumber;
