import KcalDisplay from "./KcalDisplay.js";
import MacrosDisplay from "./MacrosDisplay.js";
import OptionDisplay from "./OptionDisplay.js";
import style from './ResultDisplay.module.css';
const ResultDisplay = () =>{
  return(
      <div className={style.root}>
      <div className={style.containerLeft}>
      <KcalDisplay />
      <MacrosDisplay />
      </div>
      <div className={style.containerRight}><OptionDisplay /></div>
      </div>
  );
}
export default ResultDisplay;