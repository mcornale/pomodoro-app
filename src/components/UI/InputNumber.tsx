import Icon from '../Icon';
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
          <Icon arrowUpIcon />
          <Icon arrowDownIcon />
        </div>
      </div>
    </div>
  );
};

export default InputNumber;
