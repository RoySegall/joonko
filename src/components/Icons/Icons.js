import arrowDown from "./arrowDown.svg";
import EllipseIcon from "./Ellipse.svg";
import HelpIcon from "./Help.svg";
import RectanglePinkIcon from "./RectanglePink.svg";
import RectanglePurpleIcon from "./RectanglePurple.svg";
import RectangleYellowIcon from "./RectangleYellow.svg";
import XBigIcon from "./XBig.svg";
import XSmallIcon from "./XSmall.svg";

import "./arrow.scss";

export const Arrow = ({direction = 'down'}) => <><img src={arrowDown} className={`arrow ${direction}`} alt="Arrow" /></>
export const Ellipse = () => <><img src={EllipseIcon} className={`icon Ellipse`} alt="Arrow" /></>
export const Help = () => <><img src={HelpIcon} className={``} alt="Arrow" /></>
export const RectanglePink = () => <><img src={RectanglePinkIcon} className={`icon RectanglePink`} alt="Arrow" /></>
export const RectanglePurple = () => <><img src={RectanglePurpleIcon} className={`icon RectanglePurple`} alt="Arrow" /></>
export const RectangleYellow = () => <><img src={RectangleYellowIcon} className={`icon RectangleYellow`} alt="Arrow" /></>
export const XBig = () => <><img src={XBigIcon} className={`icon XBig`} alt="Arrow" /></>
export const XSmall = () => <><img src={XSmallIcon} className={`icon XSmall`} alt="Arrow" /></>
