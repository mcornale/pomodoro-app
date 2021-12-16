import { createPortal } from 'react-dom';
import Backdrop from './Backdrop';
import SettingsWindow from './SettingsWindow';

import styles from './Modal.module.css';

const Modal = () => {
  return createPortal(
    <div className={styles.modal}>
      <Backdrop />
      <SettingsWindow />
    </div>,
    document.getElementById('root')!
  );
};

export default Modal;
