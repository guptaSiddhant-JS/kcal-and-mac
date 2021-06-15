import React , {useState } from "react";
import Card from '../Card/Card.js';
import UserInput from '../../UserInput/UserInput';
import ResultDisplay from './ResultDisplay.js';
import styles from './HomeDisplay.module.css';
import HelpIcon from '@material-ui/icons/Help';
const HomeDisplay = () =>{
  const [recivedKcal=0, setRecivedKcal] = useState();
 const [BMI, setBMI] = useState();
 const [BMR, setBMR] = useState();
 const [toggleBtn, setToggleBtn] = useState(false);
 const saveResultData = result =>{
      setRecivedKcal(result);
 }
  const saveBMI = bmi =>{
         setBMI(bmi);
  }  
  const saveBMR = bmr =>{
         setBMR(bmr);
  }  
  const saveToggle = t =>{setToggleBtn(prev => !prev)}
  return(
    <>
    
     <div className={styles.root}>
      <div className={styles.nav}> 
                 <div>  
                 </div>
                 <div className={styles.tags} >
                     <h3 >Services</h3>
                    <HelpIcon />
                 </div>
                 
          </div>

     <div className={styles.main} > 
        <div className={styles.headContainer}> 
        <h1 className={styles.heading}>kcal & mac</h1>
        <h2 className={styles.subHeading}> Calories and Macronutrients Calculater</h2>
        </div>
        <div className={styles.inputContainer}>
        <Card className={styles.userInputCard}>
           <UserInput 
           onSaveResult={saveResultData} 
           onSaveBMI={saveBMI} 
           onSaveBMR={saveBMR} 
           onSaveToggle={saveToggle} 
           />
        </Card>
        </div>
      </div>
     </div>
    <ResultDisplay 
    resultData={recivedKcal} 
    resultBMI={BMI} 
    resultBMR={BMR} 
    />
    </>
  );
}
export default HomeDisplay;   
