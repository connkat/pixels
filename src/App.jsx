import { Button, Box, ThemeWrapper } from "retro-ui";

import logo from "./assets/pixels-logo-top.png";
import sword from "./assets/sword.png";
import pints from "./assets/pints.png";

import "./App.css";

function App() {
  return (
    <ThemeWrapper>
      <div className="App">
        <div className="logo-row">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="intro">
          <p>
            Welcome to the original Pixels Website! Tony wanted to go in another
            direction but I liked it so much I saved it as an easteregg
          </p>
          <p>It's dangerous to go alone! Take this.</p>
          <img src={sword} className="sword" alt="sword" />
          <p>&#9660; &#9660; &#9660; &#9660; &#9660; &#9660; &#9660; &#9660;</p>
        </div>

        <div className="mission">
          <Box>
            <h2>What is Pixels YYC?</h2>
            <p>
              Pixels YYC is a local tech group with the goal of bringing
              together talent in a relaxed and friendly environment. We've been
              hosting{" "}
              <a
                className="App-link"
                href="https://www.meetup.com/pxandpints/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pixels and Pints
              </a>{" "}
              for 13 years and will be expanding into new terrirory in 2023.
            </p>
            <div className="discord-button">
              <a
                className="App-link"
                href="https://discord.gg/y5JKKkHYgN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Join the Pixels Discord</Button>
              </a>
            </div>
            <p>
              We're always looking for new ways to connect companies and people
              so please contact us if your company would like to work with
              Pixels!
            </p>
            <div className="contact-button">
              <a
                className="App-link"
                href="mailto:hi.connkat@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Sponsor an event</Button>
              </a>
            </div>
          </Box>
        </div>
        <h1>Events</h1>
        <h1>&#9660; &#9660; &#9660; &#9660; &#9660; &#9660;</h1>
        <div className="event-left">
          <h2>Pixels and Pints</h2>
          <div className="event-left-row">
            <img src={pints} className="pints-logo" alt="pints" />
            <div>
              <p>
                The purpose of Pixels and Pints is simple: provide a venue for
                web developers and digital creatives to sit down, relax and talk
                shop. There are no presentations, tutorials or pre-defined
                discussion topics; just a few pints and good conversation.
              </p>
              <p>
                All are welcome: designers; coders; copywriters; analysts;
                anyone who spends their day pushing, publishing or just plain
                programming pixels.
              </p>
              <p>
                Why the pints? Because after a long work day, you probably need
                one.
              </p>
              <div className="event-left-button">
                <a
                  className="App-link"
                  href="https://www.meetup.com/pxandpints/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Find the next meeting here.</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="event-right">
          <h2>Pixel Bits</h2>
          <div className="event-right-row">
            <img src={pints} className="pints-logo-2-mobile" alt="pints" />
            <div>
              <p>
                Level up your coding skills at these workshop style events where you will have the opportunity to pair on a different topic every time
              </p>
              <div className="event-right-button">
                <a
                  className="App-link"
                  href="https://www.meetup.com/pxandpints/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Another link maybe?</Button>
                </a>
              </div>
            </div>
            <img src={pints} className="pints-logo-2-desktop" alt="pints" />
          </div>
        </div> */}
      </div>
    </ThemeWrapper>
  );
}

export default App;
