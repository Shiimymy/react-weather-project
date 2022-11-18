import './App.css';
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather />
        <footer>
          <p>
            Coded by <a href="https://deft-banoffee-8f140b.netlify.app/" target="_blank" rel="noreferrer noopener">Eugénie BvN</a>, and open source on <a href="https://github.com/Shiimymy/react-weather-project" target="_blank" rel="noreferrer noopener">Github</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

