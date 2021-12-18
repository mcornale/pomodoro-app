import { forwardRef } from 'react';
import styles from './InputRadio.module.css';

type Props = {
  id: string;
  name: string;
  colorRadio?: boolean;
  fontRadio?: boolean;
  fontFamily?: string;
  colorHex?: string;
  checked: boolean;
  onChangeChecked: () => void;
};

const InputRadio = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    id,
    name,
    colorRadio,
    fontRadio,
    fontFamily,
    colorHex,
    checked,
    onChangeChecked,
  } = props;

  return (
    <label htmlFor={id} className={styles.inputRadioContainer}>
      <input
        id={id}
        name={name}
        className={styles.inputRadio}
        type='radio'
        checked={checked}
        onChange={onChangeChecked}
        ref={checked ? ref : undefined}
      />
      <span
        className={`${styles.inputRadioCustom} ${
          colorRadio ? styles.inputRadioColor : ''
        } ${fontRadio ? styles.inputRadioFont : ''}`}
        style={{
          fontFamily: fontFamily ? fontFamily : '',
          backgroundColor: colorHex ? colorHex : '',
        }}
      ></span>
    </label>
  );
});

export default InputRadio;
