import PropTypes from 'prop-types';
import './FeedbackOptions.css'

export default function FeedbackOptions({ good, neutral, bad, onLeaveFeedback}) {
  return (
    <>
    <button
    type="button"
    className="button"
    onClick={() => onLeaveFeedback("good")}
    >
    Good
    </button>
    <button
    type="button"
    className="button"
    onClick={() => onLeaveFeedback("neutral")}
    >
    Neutral
    </button>
    <button
    type="button"
    className="button"
    onClick={() => onLeaveFeedback("bad")}
    >
    Bad
    </button>
    </>
    )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func
};