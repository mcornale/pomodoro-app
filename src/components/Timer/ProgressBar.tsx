import styles from './ProgressBar.module.css';

type Props = {
  percentage: number;
};

const ProgressBar = (props: Props) => {
  const { percentage } = props;

  return (
    <svg className={styles.progressBar}>
      <circle
        cx='50%'
        cy='50%'
        r='45%'
        fill='none'
        style={{
          strokeDashoffset: `calc(var(--dash-array) - (var(--dash-array) * ${percentage}) / -100)`,
        }}
      ></circle>
    </svg>
  );
};

export default ProgressBar;
