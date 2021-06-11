
import KcalDisplay from "./KcalDisplay.js";
import MacrosDisplay from "./MacrosDisplay.js";
import OptionDisplay from "./OptionDisplay.js";
import BMIDisplay from "./BMIDisplay.js";
import style from './ResultDisplay.module.css';
const ResultDisplay = (props) =>{
 const showData = true;
  
  
  return(
      <div className={style.root}>
      <div className={style.containerLeft}>
      {showData && <KcalDisplay result={props.resultData}/>}
      <BMIDisplay result={props.resultData} />
      {showData && <MacrosDisplay result={props.resultData}/>}
      </div>
      {showData && <div className={style.containerRight}><OptionDisplay /></div>}
      </div>
  );
}
export default ResultDisplay;