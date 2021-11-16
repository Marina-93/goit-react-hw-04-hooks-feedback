import PropTypes from 'prop-types';
import './Status.css'

export default function Status({ good, neutral, bad, total, positiveFeedback }) {
    return (
        <div className="contaner">
            <p>Good:<span className="span">{good}</span></p>
            <p>Neutral:<span className="span">{neutral}</span></p>
            <p>Bad:<span className="span">{bad}</span></p>
            <p>Total:<span className="span">{total}</span></p>
            <p>Positive feedback:<span className="span">{positiveFeedback}</span></p>
        </div>
  )
}
  
Status.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positiveFeedback: PropTypes.string
}