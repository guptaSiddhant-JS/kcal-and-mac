
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import HomeDisplay from './components/UI/Display/HomeDisplay.js';
import ResultDisplay from './components/UI/Display/ResultDisplay.js';
function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeDisplay />
      <ResultDisplay />
    </div>
  );
}

export default App;
