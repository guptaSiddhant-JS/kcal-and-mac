import React , {useState } from "react";
import Card from '../Card/Card.js';
import UserInput from '../../UserInput/UserInput';
import ResultDisplay from './ResultDisplay.js';
import style from './HomeDisplay.module.css';
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
     <div className={style.img}> </div>
     <div className={style.root}>
     {/* <div><h1 className={style.header}>al & Mac </h1></div> */}
     <Card className={style.userInputCard}>
         <UserInput onSaveResult={saveResultData} onSaveBMI={saveBMI} onSaveBMR={saveBMR} onSaveToggle={saveToggle} />
        </Card>
     </div>
   <ResultDisplay resultData={recivedKcal} resultBMI={BMI} resultBMR={BMR} />
    </>
  );
}
export default HomeDisplay;   
//  <div className={style.img}> </div>
//         <div className={style.nav}>
//            <h1 className={style.header}>Kcal & Mac </h1>
           
//            {/* <p className={style.para}>“When Diet Is Wrong, Medicine Is of No Use. When Diet Is Correct, Medicine Is of No Need.”</p>
//            <p className={style.para}>Poor nutrition can result in nutrient deficiency diseases
//             like blindness,anaemia, scurvy, preterm birth, stillbirth, and cretinism, as well 
//             as nutrient excess health-threatening conditions like obesity and metabolic syndrome, 
//             as well as common chronic systemic diseases like cardiovascular disease, diabetes, and
//              osteoporosis. In severe situations of malnutrition, wasting can occur..</p> */}
//         </div>
//     <div className={style.root}>
//        <Card className={style.userInputCard}>
//         <UserInput onSaveResult={saveResultData} onSaveBMI={saveBMI} onSaveToggle={saveToggle} />
//        </Card>
//       {/* {toggleBtn && <Card className={style.contextCard}>

//          <div> <p>A calorie is a unit of energy measurement. 
//          Calories are a unit of measurement for the amount of 
//          energy in meals and beverages. To lose weight, you must
//           consume less calories each day than your body burns.</p><br />
//           <p>  Protein, carbs, and fats are the three types of nutrients
//            you consume the most and which give you with the majority of 
//            your energy. When you count your macros, you're keeping track
//             of how many grammes of protein, carbs, or fat you're consuming.</p>
//           </div>
//        </Card>} */}
      
//     </div>
//      {toggleBtn && <ResultDisplay resultData={recivedKcal} resultBMI={BMI} />}