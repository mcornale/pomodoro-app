import styles from './InputRadio.module.css';

type Props = {
  colorRadio?: boolean;
  fontRadio?: boolean;
};

const InputRadio = (props: Props) => {
  const { colorRadio, fontRadio } = props;

  return (
    <label className={styles.inputRadioContainer}>
      <input className={styles.inputRadio} type='radio' />
      <span
        className={`${styles.inputRadioCustom} ${
          colorRadio ? styles.inputRadioColor : ''
        } ${fontRadio ? styles.inputRadioFont : ''}`}
      ></span>
    </label>
  );
};

export default InputRadio;
