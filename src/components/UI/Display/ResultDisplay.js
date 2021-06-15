import { useEffect } from "react";
import KcalDisplay from "./KcalDisplay.js";
import MacrosDisplay from "./MacrosDisplay.js";
import NotesDisplay from "./NotesDisplay.js";
import BMIDisplay from "./BMIDisplay.js";
import BMRDisplay from "./BMRDisplay.js";
import style from './ResultDisplay.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
const ResultDisplay = (props) =>{
 useEffect(() => {
   Aos.init({duration:2000}); 
 }, []);
  
  
  return(
      <div className={style.root}>
      <div className={style.containerLeft}>
      <div data-aos="fade-up"><BMIDisplay  result={props.resultBMI} /></div>
      <div data-aos="fade-up"><BMRDisplay  result={props.resultBMR} /></div>
      <div data-aos="fade-up"><KcalDisplay result={props.resultData}/></div>
       <div data-aos="fade-up"><MacrosDisplay result={props.resultData}/></div>
      </div>
      <div data-aos="fade-up" className={style.containerRight}><NotesDisplay /></div>
      </div>
  );
}
export default ResultDisplay;