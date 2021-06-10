// import React , {useState } from "react";
import Card from '../Card/Card.js';
import UserInputKg from '../../UserInput/UserInputKg.js';
// import UserInputLbs from '../../UserInput/UserInputLbs.js';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import style from './HomeDisplay.module.css';
const HomeDisplay = () =>{
    // const standerdCal = (el) =>{
    //     const recivedStanderd = el.target.value;
    //     switch(recivedStanderd){
    //         case 'kg':inputStanderd = false; break;
    //         case 'lbs':inputStanderd = true;break;    
    //         default : return;
    //     }
    // }
  return(
    <div className={style.root}>
       <Card className={style.userInputCard}>
          {/* <FormControl >
          <InputLabel>Standerd</InputLabel>
        <Select
          value={inputStanderd}
          onChange={standerdCal}
        >
          <MenuItem value={'kd'}>Kg/feet</MenuItem>
          <MenuItem value={'lbs'}>lbs/cm</MenuItem>
        </Select>
         </FormControl> */}
        <UserInputKg />
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
  );
}
export default HomeDisplay;   