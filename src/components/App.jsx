/* eslint-disable no-fallthrough */
import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback/Feedback';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const options = { good, bad, neutral };

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prev => (prev += 1));
        break;

      case 'bad':
        setBad(prev => (prev += 1));
        break;

      case 'neutral':
        setNeutral(prev => (prev += 1));
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback() - neutral;
    return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  };

  return (
    <>
      <Section title="Leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Section>
          <Notification message="There is no feedback" />
        </Section>
      )}
    </>
  );
};

