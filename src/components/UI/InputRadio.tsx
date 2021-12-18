import styles from './InputRadio.module.css';

type Props = {
  colorRadio?: boolean;
  fontRadio?: boolean;
  fontFamily?: string;
  colorHex?: string;
};

const InputRadio = (props: Props) => {
  const { colorRadio, fontRadio, fontFamily, colorHex } = props;

  return (
    <label className={styles.inputRadioContainer}>
      <input className={styles.inputRadio} type='radio' />
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
};

export default InputRadio;
