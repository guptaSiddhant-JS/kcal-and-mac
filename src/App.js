
import './App.css';
import Header from './components/UI/Header/Header.jsx'
import Section1 from './Section1/Section1.jsx'
import UserOptions from './components/UI/User Options/UserOptions.jsx'
import DisplayResult from './components/UI/Displaying Result/DisplayResult.jsx'
import DisplayMacros from './components/UI/DisplayMacros/DisplayMacros.jsx'
import Footer from './components/Footer/Footer.jsx'
function App() {
  return (
    <div className="App">
    <Header />
     <Section1/>
     {/* <DisplayResult />
     <div>
        <div className="topPlane"> <DisplayMacros /> </div>
        <div className="bottomPlane"><UserOptions /></div>
               
     </div>
      <Footer /> */}
    </div>
  );
}

export default App;
