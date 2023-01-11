import logo from "./assets/pixels-logo-transparent.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="logo" alt="logo" />
      <a
        className="App-link"
        href="https://www.meetup.com/pxandpints/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit the Meetup page
      </a>
      <a
        className="App-link"
        href="https://discord.gg/y5JKKkHYgN"
        target="_blank"
        rel="noopener noreferrer"
      >
        Join us on Discord
      </a>
    </div>
  );
}

export default App;
