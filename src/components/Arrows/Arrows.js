import arrowDown from "./arrowDown.svg";
import "./arrow.scss";

export const Arrow = ({direction = 'down'}) => <><img src={arrowDown} className={`arrow ${direction}`} alt="Arrow" /></>
