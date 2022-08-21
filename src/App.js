import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weather from "./Wether";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kobe" />
      </div>
    </div>
  );
}

export default App;
