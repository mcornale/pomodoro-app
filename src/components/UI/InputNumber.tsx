import React, { forwardRef, useReducer } from 'react';
import Icon from '../Icon/Icon';
import Button from './Button';
import styles from './InputNumber.module.css';

type Props = {
  id: string;
  label: string;
  value: number;
  disabled: boolean;
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

const InputNumber = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { id, label, value, disabled } = props;

  const [inputNumberValue, dispatchInputNumberValue] = useReducer(
    inputNumberReducer,
    { value }
  );

  const onArrowUpClickHandler = () => {
    if (!disabled) dispatchInputNumberValue({ type: 'increment' });
  };

  const onArrowDownClickHandler = () => {
    if (!disabled && inputNumberValue.value > 1)
      dispatchInputNumberValue({ type: 'decrement' });
  };

  return (
    <div>
      <label htmlFor={id} className={styles.inputNumberLabel}>
        {label}
      </label>
      <div className={styles.inputNumberContainer}>
        <input
          id={id}
          className={styles.inputNumber}
          type='number'
          name={label}
          step={1}
          value={inputNumberValue.value}
          ref={ref}
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
});

export default InputNumber;
