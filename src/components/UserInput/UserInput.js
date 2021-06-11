 import React , {useState } from "react";
import TextField from '@material-ui/core/TextField'; 
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'; 
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const UserInput = (props) =>{
    const [age, setAge] = useState();
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [activity, setActivity] = useState(null);
    const [gender, setGender] = useState(null);
   const [toggleBtn, setToggleBtn] = useState(false);
    // const [resultState = 0 , setResultState] = useState();
    // css
    const useStyles = makeStyles((theme) => ({
      root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '30ch',
      
    },
   
  },

  }));
  const classes = useStyles();

   
 
    const calculate = (el) =>{
     let result = 0;

        if (gender === 'M'){
            // For men, BMR = 66.47 + (13.75 x weight in kg) + (5.003 x height in cm) - (6.755 x age in years)
            result =  ((66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age)) * activity ).toFixed(0);

        }else{
            // For women, BMR = 655.1 + (9.563 x weight in kg) + (1.850 x height in cm) - (4.676 x age in years)
            result =  ((655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age)) *activity ).toFixed(0);

        }
        // setResultState(result);
        props.onSaveResult(result);
       setToggleBtn(prev=> !prev);
        
      }
      const reset = () =>{
        setAge('');
        setHeight('');
        setWeight('');
        setGender(null);
        setActivity(null);
        setToggleBtn(prev=> !prev);
        
      }
 
     

   return (
     <>
       <form className={classes.root} autoComplete="off"  > 
             <TextField value={age}  type="number" label="Age" variant="outlined"   onChange={(el) => setAge(el.target.value)}/>
             <TextField value={weight}  type="number" label="Weight" variant="outlined" onChange={(el) => setWeight(el.target.value)} />
             <TextField value={height} type="number" label="Height" variant="outlined"   onChange={(el) => setHeight(el.target.value)}  /><br/>
             {/*  */}
             <FormControl >
        <InputLabel >Gender</InputLabel>
        <Select
          value={gender}
          onChange={(el) => setGender(el.target.value)}
        >
          <MenuItem value={'M'}>Male</MenuItem>
          <MenuItem value={'F'}>Female</MenuItem>
        </Select>
         </FormControl>
             {/*  */}
        <FormControl >
        <InputLabel >Activity Level</InputLabel>
        <Select
          value={activity}
          onChange={(el) => setActivity(el.target.value)}
          error
        >
          <MenuItem value={1.2}>little or no exercise</MenuItem>
          <MenuItem value={1.375}>exercise 1–3 days/week</MenuItem>
          <MenuItem value={1.55}>exercise 3–5 days/week</MenuItem>
           <MenuItem value={ 1.725}>exercise 6–7 days/week</MenuItem>
          <MenuItem value={1.9}>hard exercise 6–7 days/week</MenuItem>
        </Select>
      </FormControl>
             <Button  variant="contained" color="primary" onClick={ toggleBtn ? reset : calculate}> { toggleBtn ? 'Reset' : "Calculate "}</Button>
       </form>
       </>
   );
}
export default UserInput;

// For women, BMR = 655.1 + (9.563 x weight in kg) + (1.850 x height in cm) - (4.676 x age in years)
// For men, BMR = 66.47 + (13.75 x weight in kg) + (5.003 x height in cm) - (6.755 x age in years)

// Step 2: Calculate Your AMR
// Sedentary (little or no exercise): AMR = BMR x 1.2
// Lightly active (exercise 1–3 days/week): AMR = BMR x 1.375
// Moderately active (exercise 3–5 days/week): AMR = BMR x 1.55
// Active (exercise 6–7 days/week): AMR = BMR x 1.725
// Very active (hard exercise 6–7 days/week): AMR = BMR x 1.9

  