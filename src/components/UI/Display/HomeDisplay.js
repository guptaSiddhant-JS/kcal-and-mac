import React , {useState } from "react";
import Card from '../Card/Card.js';
import UserInput from '../../UserInput/UserInput';
import ResultDisplay from './ResultDisplay.js';
import style from './HomeDisplay.module.css';
const HomeDisplay = () =>{
  const [recivedKcal=0, setRecivedKcal] = useState();
  
 const saveResultData = result =>{
      setRecivedKcal(result);
 }
    
  return(
    <>
    <div className={style.root}>
       <Card className={style.userInputCard}>
        <UserInput onSaveResult={saveResultData} />
       </Card>
       <Card className={style.contextCard}>

         <div> <p>It is a long established fact that a reader will
          be distracted by the readable content of a page when looking 
          at its layout. The point of using Lorem Ipsum is that it has a
           more-or-less normal distribution of letters, as opposed to using 
           'Content here, content here', making it look like readable English. 
           Many desktop publishing packages and web page editors now use Lorem 
           Ipsum as their default model text, and a search for 'lorem ipsum' will 
           uncover many web sites still in their infancy. Various versions have evolved
            over the years, sometimes by accident, sometimes on purpose (injected humour
             and the like).</p></div>
       </Card>
      
    </div>
     <ResultDisplay resultData={recivedKcal}/>
    </>
  );
}
export default HomeDisplay;   