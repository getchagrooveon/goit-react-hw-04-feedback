import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <span className={styles.results}>Good {good}</span>
      <span className={styles.results}>Neutral {neutral}</span>
      <span className={styles.results}>Bad {bad}</span>
      <span className={styles.results}>Total {total}</span>
      <span className={styles.results}>
        Positive feedback {positivePercentage}
      </span>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.node,
};
