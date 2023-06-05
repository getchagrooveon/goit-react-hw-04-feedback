import styles from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <h2 className={styles.title}>{message}</h2>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
