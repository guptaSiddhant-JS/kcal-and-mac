import React , { useState  } from "react";
import Card from "../Card/Card.js";
import styles from "./MacrosDisplay.module.css";
import TextField from '@material-ui/core/TextField'; 
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import PieChart from "../../Chart/Chart";
const MacrosDisplay = (props) =>{
 const [protein=0, setProtein] = useState();
   const [carb=0, setCarb] = useState();
   const [fat=0, setFat] = useState();
   const [kcal, setKcal] = useState();
   const [macroSplit, setMacroSplit] = useState();
   
   const useStyles = makeStyles((theme) => ({
      root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '20ch',
      
      
    },
   
  },

  }));
   let p = 0;
   let c = 0;
   let f =0;
   const classes = useStyles();
   const textHandler = (el) =>{
     setKcal(el.target.value);

   }
   const splitCal = (el) =>{
       const recivedData = el.target.value;
         setMacroSplit(recivedData);
        
       switch (recivedData) {
           case 'k':
               p = kcal * 0.3;
               f = kcal * 0.7;
               c = 0;
               break;
           case 'hc':
               p = kcal * 0.3;
               f = kcal * 0.2;
               c = kcal * 0.5;
               break;
                  case 'hp':
                      p = kcal * 0.5;
                     f = kcal * 0.3;
                      c = kcal *  0.2;
               
               break;
              case 'b':
             p = kcal * 0.4;
               f = kcal * 0.2;
               c = kcal *0.4;
               break;
               default:
                 break;
       }
           setProtein((p/4).toFixed());
           setCarb((c/4).toFixed());
           setFat((f/9).toFixed());
   }
   const dataArr =  [kcal, protein , carb , fat];
  return(
    <>
      <Card className={styles.mainCard}>
       <div className={styles.data}>
       <div className={classes.root}>
       <TextField value={kcal} type="number" label="Calorie" variant="outlined" onChange={textHandler}/>
         <FormControl >
          <InputLabel>Split [P:C:F]</InputLabel>
        <Select
          value={macroSplit}
          onChange={splitCal}
        >
          <MenuItem value={'k'}>Keto [30:0:70]</MenuItem>
          <MenuItem value={'hp'}>Height Protein [30:0:70]</MenuItem>
          <MenuItem value={'hc'}>Height Carb [30:50:20]</MenuItem>
          <MenuItem value={'b'}>Balance [40:40:20]</MenuItem>
        </Select> 
         </FormControl>
         </div>
         <Card className={`${styles.subCard} ${styles.protein}`}><h2>  {protein} grams</h2><p>Protien</p></Card>
         <Card className={`${styles.subCard} ${styles.carb}`}><h2>  {carb} grams</h2><p>Carb</p></Card>
         <Card className={`${styles.subCard} ${styles.fat}`}> <h2> {fat} grams</h2><p>Fat</p></Card>             
        </div>
            <div className={styles.chart} >
               <PieChart data={dataArr} />
            </div>
         </Card>
      </>
  );
}
export default MacrosDisplay;