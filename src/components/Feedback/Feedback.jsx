import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css'

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <>
       <div className={css.text} >
        {   options.map(option => {
          return (
            <p key={option}>
             
              <button className={css.button} type="button" onClick={() => onLeaveFeedback(option)}>
                {option}
              </button>
           </p>
          );
        })}
      </div>
    </>
  );
};
Feedback.propType = {
  options:PropTypes.shape({
    option:PropTypes.arrayOf({
      good:PropTypes.string.isRequired,
      neutral:PropTypes.string.isRequired,
      bad:PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
// export const Feedback = ({ handleIncrementGood, handleIncrementNeutral, handleIncrementBad}) => {
//     return (
//         <>
//         <div>
//           <button onClick={handleIncrementGood}>
//             Good
//           </button>
//           <button onClick={handleIncrementNeutral}>
//             Neutral
//           </button>
//           <button onClick={handleIncrementBad}>
//             Bad
//           </button>
//         </div>
//         </>
//     )
// }
// Feedback.propType = {
//   handleIncrementGood: PropTypes.func.isRequired,
//   handleIncrementNeutral: PropTypes.func.isRequired,
//   handleIncrementBad: PropTypes.func.isRequired,
// };
