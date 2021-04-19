import Details from "../Details/Details";
import "./titleAndDetails.scss"

export default () => {

  return <sction className="title-and-details">
    <div className="title-wrapper">
      <p className="title">The future of Work in the now:</p>
      <p className="title">Why you should Become <br />Remote-ready</p>
      <h2 className="small-text">Infographic</h2>
    </div>
    <Details />
  </sction>
}
