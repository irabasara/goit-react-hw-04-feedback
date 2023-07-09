import css from './statistics.module.css';
import PropTypes from 'prop-types';


export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li className={css.statistics}>good: {good}</li>
      <li className={css.statistics}>neutral: {neutral}</li>
      <li className={css.statistics}>bad: {bad}</li>
      <li className={css.statistics}>total: {total}</li>
      <li className={css.statistics}>
        positivePercentage: {positivePercentage}%
      </li>
    </ul>
  );
};

 Statistics.propTypes = {
   good: PropTypes.number,
   neutral: PropTypes.number,
   bad: PropTypes.number,
   total: PropTypes.number,
   positivePercentage: PropTypes.number,
 };
