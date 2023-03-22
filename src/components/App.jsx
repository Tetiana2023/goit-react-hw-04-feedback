import { Statistic } from './Statistic/Statistic';
import React from 'react';
import { Feedback } from './Feedback/Feedback';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import css from './App.module.css';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = Object.keys({good, neutral, bad  });
  // console.log(options)


  const handleIncrement = key => {
   
    switch (key) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default: 
      return;
    }
   
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return  Math.round((good / countTotalFeedback()) * 100);
  };
  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <Feedback
          options = {options}
          onLeaveFeedback={handleIncrement}
        />
        {/* <Feedback
        handleIncrementGood={this.handleIncrementGood}
        handleIncrementNeutral={this.handleIncrementNeutral}
        handleIncrementBad={this.handleIncrementBad}
      /> */}
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// addFeedback =(name)=>{
//   this.setState((prevState) => {return {
//     [name]:prevState[name] + 1
//   }

//   }
// )}
// handleIncrementGood = () => {
//   this.setState(prevState => ({
//     good: prevState.good + 1,
//   }));
// };
// handleIncrementNeutral = () => {
//   this.setState(prevState => ({
//     neutral: prevState.neutral + 1,
//   }));
// };

// handleIncrementBad = () => {
//   this.setState(prevState => ({
//     bad: prevState.bad + 1,
//   }));
// };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     let total = 0;
//      total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage() {
//     const { good, bad, neutral } = this.state;

//     let count = 0;
//     count = (good / (good + bad + neutral)) * 100;
//     return Math.round(count);
//     // return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     return (
//       <div className={css.container}>
//         <Section title="Please leave feedback">
//           <Feedback
//           options={["good", "bad","neutral"]}
//           onLeaveFeedback={this.addFeedback}
//           />
//           {/* <Feedback
//             handleIncrementGood={this.handleIncrementGood}
//             handleIncrementNeutral={this.handleIncrementNeutral}
//             handleIncrementBad={this.handleIncrementBad}
//           /> */}
//         </Section>

//         <Section title="Statistics">
//           {this.countTotalFeedback() === 0 ? (
//             <Notification message="There is no feedback"></Notification>
//           ) : (<Statistic
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />)}

//         </Section>
//       </div>
//     );
//   }
// }
