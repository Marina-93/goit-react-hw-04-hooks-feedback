import PropTypes from 'prop-types'

export default function Notification({ message }) {
  return <p className="contaner">{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string
}