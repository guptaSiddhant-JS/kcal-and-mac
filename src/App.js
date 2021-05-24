
import './App.css';
import UserSearch from './components/UI/User Input/UserSearch.jsx'
import UserOptions from './components/UI/User Options/UserOptions.jsx'
import DisplayResult from './components/UI/Displaying Result/DisplayResult.jsx'
function App() {
  return (
    <div className="App">
     <UserSearch />
     <div>
        <DisplayResult /> 
        <UserOptions />       
     </div>
     
    </div>
  );
}

export default App;
