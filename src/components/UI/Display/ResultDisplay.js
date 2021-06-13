import { useEffect } from "react";
import KcalDisplay from "./KcalDisplay.js";
import MacrosDisplay from "./MacrosDisplay.js";
import OptionDisplay from "./OptionDisplay.js";
import BMIDisplay from "./BMIDisplay.js";
import style from './ResultDisplay.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
const ResultDisplay = (props) =>{
 useEffect(() => {
   Aos.init({duration:3000}); 
 }, []);
  
  
  return(
      <div className={style.root}>
      <div className={style.containerLeft}>
      <div data-aos="fade-up"><BMIDisplay  result={props.resultBMI} /></div>
      <div data-aos="fade-up"><KcalDisplay result={props.resultData}/></div>
       <div data-aos="fade-up"><MacrosDisplay result={props.resultData}/></div>
      </div>
      <div data-aos="fade-up" className={style.containerRight}><OptionDisplay /></div>
      </div>
  );
}
export default ResultDisplay;