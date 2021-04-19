import TitleAndDetails from "./components/TitleAndDetails/TitleAndDetails";
import Contact from "./components/Contact/Contact";
import {Ellipse, RectanglePink, RectanglePurple, RectangleYellow, XBig, XSmall} from "./components/Icons/Icons";

function App() {
  return (
    <main>
      <div className="wrapper">
        <RectanglePink />
        <RectanglePurple />
        <RectangleYellow />
        <XBig />
        <XSmall />

        <TitleAndDetails />
        <Ellipse />
        <Contact />
      </div>
    </main>
  );
}

export default App;
