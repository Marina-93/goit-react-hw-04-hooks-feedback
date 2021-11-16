import {useState} from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Status from './components/Status/Status';
import Notification from './components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(null);
  const [neutral, setNeutral] = useState(null);
  const [bad, setBad] = useState(null);

  const leaveFeedback = (e) => {
    switch (e) {
      case 'good':
        setGood(prev => prev + 1)
        break
      case 'neutral':
        setNeutral(prev => prev + 1)
        break
      case 'bad':
        setBad(prev => prev + 1)
        break
      default: return
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad  
  }

  const countPositiveFeedbackPercentage = () => {
    return good === 0
    ? "0"
    : Math.round((good * 100) / countTotalFeedback()) + "%";
  }
    
  return (
      <>
      <Section title="Please leave feedback">
      <FeedbackOptions onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section title="Statistics" />
      {countTotalFeedback() ? (
        <Status
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positiveFeedback={countPositiveFeedbackPercentage()}
        />
        ) : (
          <Notification message="No feedback given"></Notification>
          )}
      </>
  )
}