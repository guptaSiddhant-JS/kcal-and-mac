import React , {useState } from "react";
import Card from '../Card/Card.js';
import UserInput from '../../UserInput/UserInput';
import ResultDisplay from './ResultDisplay.js';
import style from './HomeDisplay.module.css';
const HomeDisplay = () =>{
  const [recivedKcal=0, setRecivedKcal] = useState();
 const [BMI, setBMI] = useState();
 const [toggleBtn, setToggleBtn] = useState(false);
 const saveResultData = result =>{
      setRecivedKcal(result);
 }
  const saveBMI = b =>{
         setBMI(b);
  }  
  const saveToggle = t =>{setToggleBtn(prev => !prev)}
  return(
    <>
    <div className={style.root}>
       <Card className={style.userInputCard}>
        <UserInput onSaveResult={saveResultData} onSaveBMI={saveBMI} onSaveToggle={saveToggle} />
       </Card>
      {toggleBtn && <Card className={style.contextCard}>

         <div> <p>A calorie is a unit of energy measurement. 
         Calories are a unit of measurement for the amount of 
         energy in meals and beverages. To lose weight, you must
          consume less calories each day than your body burns.</p><br />
          <p>  Protein, carbs, and fats are the three types of nutrients
           you consume the most and which give you with the majority of 
           your energy. When you count your macros, you're keeping track
            of how many grammes of protein, carbs, or fat you're consuming.</p>
          </div>
       </Card>}
      
    </div>
     {toggleBtn && <ResultDisplay resultData={recivedKcal} resultBMI={BMI} />}
    </>
  );
}
export default HomeDisplay;   