import "./contact.scss";

export default () => {

  return <section className="contact">
    <div className="titles">
      <p className="big-title">Want to get the full version?</p>
      <p className="small-title">Fill in the form below:</p>
    </div>

    <div className="form">
      <input placeholder="Full name"/>
      <input placeholder="Company name"/>
      <input placeholder="Phone"/>
      <input placeholder="Work Email"/>
    </div>

    <div className="actions">
      <a className="button">Download now >></a>
    </div>

    <div className="terms">
      <input type="checkbox" /> <p>I agree to the privacy policy including for Joonko to use my contact details to contact me for marketing purposes.</p>
    </div>

  </section>
}
