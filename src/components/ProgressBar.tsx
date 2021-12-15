import styles from './ProgressBar.module.css';

const ProgressBar = () => {
  return (
    <svg className={styles.progressBar}>
      <circle cx='50%' cy='50%' r='45%' fill='none'></circle>
    </svg>
  );
};

export default ProgressBar;
