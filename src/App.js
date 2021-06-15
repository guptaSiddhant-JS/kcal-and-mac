import './App.css';
import NavBar from "./components/NavBar/NavBar";
import HomeDisplay from './components/UI/Display/HomeDisplay.js';
import Services from "./components/Services/Services";
import Footer from './components/Footer/Footer.js';
import { Switch , Route , Redirect } from "react-router-dom";

function App() {
  return (
    <>
    
    <div className="App">
    {/* <NavBar /> */}
     <Switch >
        <Route exact path='/' component={HomeDisplay} />
        <Route exact path='/services' component={Services} />
        <Redirect to='/' />
     </Switch >
      <Footer />
    </div>
    </>
  );
}

export default App;
