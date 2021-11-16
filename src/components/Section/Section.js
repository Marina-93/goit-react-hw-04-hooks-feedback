import propTypes from "prop-types";
import './Section.css'

export default function Section({ title, children }) {
  return (
    <section className="contaner">
      <h1 >{title}</h1>
      {children}
    </section>
  )
}

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.any,
}