import {useState} from 'react';
import "./details.scss";
import DetailsText from "../DetailsText/DetailsText";
import {Arrow} from "../Icons/Icons";

export default () => {
  const [showDetails, setShowDetails] = useState(false);

  return <div className="details">
    <a className="button" onClick={() => {setShowDetails(!showDetails)}}>
      <span>Details</span>
      <Arrow direction={showDetails ? 'right' : 'down'} />
    </a>

    {showDetails && <DetailsText /> }
  </div>
}
