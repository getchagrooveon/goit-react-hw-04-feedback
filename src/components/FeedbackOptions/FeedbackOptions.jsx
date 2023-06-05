import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const propsKeys = Object.keys(options);
  return (
    <div className={styles.buttonContainer}>
      {propsKeys.map(element => {
        return (
          <button
            key={element}
            className={styles.button}
            onClick={() => onLeaveFeedback(element)}
          >
            {element}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
