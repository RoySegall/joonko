import TitleAndDetails from "./components/TitleAndDetails/TitleAndDetails";
import Contact from "./components/Contact/Contact";
import {Ellipse, RectanglePink, RectanglePurple, RectangleYellow, XBig, XSmall} from "./components/Icons/Icons";
import Help from "./components/Help/Help";

function App() {
  return (
    <main>
      <Help />
      <div className="wrapper">
        <RectanglePink />
        <RectanglePurple />
        <RectangleYellow />
        <XBig />
        <XSmall />
        <Ellipse />

        <TitleAndDetails />
        <Contact />
      </div>
    </main>
  );
}

export default App;
