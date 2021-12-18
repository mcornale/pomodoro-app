import React, { useReducer } from 'react';
import Icon from '../Icon';
import Button from './Button';
import styles from './InputNumber.module.css';

type Props = {
  label: string;
  value: number;
};

type ValueState = {
  value: number;
};

type ValueAction = {
  type: string;
};

const inputNumberReducer = (state: ValueState, action: ValueAction) => {
  switch (action.type) {
    case 'increment':
      return { value: state.value + 1 };
    case 'decrement':
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const InputNumber = (props: Props) => {
  const { label, value } = props;

  const [inputNumberValue, dispatchInputNumberValue] = useReducer(
    inputNumberReducer,
    { value }
  );

  const onArrowUpClickHandler = () => {
    dispatchInputNumberValue({ type: 'increment' });
  };

  const onArrowDownClickHandler = () => {
    dispatchInputNumberValue({ type: 'decrement' });
  };

  return (
    <div>
      <label className={styles.inputNumberLabel}>{label}</label>
      <div className={styles.inputNumberContainer}>
        <input
          className={styles.inputNumber}
          type='number'
          min='0'
          step={1}
          value={inputNumberValue.value}
          readOnly
        />
        <div className={styles.inputNumberArrows}>
          <Button onClick={onArrowUpClickHandler} arrow>
            <Icon arrowUpIcon />
          </Button>
          <Button onClick={onArrowDownClickHandler} arrow>
            <Icon arrowDownIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InputNumber;
