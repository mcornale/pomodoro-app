import ArrowDownIcon from '../Icons/ArrowDownIcon';
import ArrowUpIcon from '../Icons/ArrowUpIcon';

import styles from './InputNumber.module.css';

type Props = {
  label: string;
};

const InputNumber = (props: Props) => {
  const { label } = props;

  return (
    <div>
      <label className={styles.inputNumberLabel}>{label}</label>
      <div className={styles.inputNumberContainer}>
        <input className={styles.inputNumber} type='number' min='0' />
        <div className={styles.inputNumberArrows}>
          <ArrowUpIcon />
          <ArrowDownIcon />
        </div>
      </div>
    </div>
  );
};

export default InputNumber;
