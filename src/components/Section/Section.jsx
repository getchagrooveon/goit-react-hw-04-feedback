import styles from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      <section className={styles.feedback}>
        <h2>{title}</h2>
        {children}
      </section>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
