import React, {useState} from 'react';
import './UserSearch.css'
const UserSearch = () => {
    const [enteredAge, setEnteredAge] = useState('');
    const [enteredHeight, setEnteredHeight] = useState('');
    const [enteredWeight, setEnteredWeight] = useState('');
    // const [enteredGender, setEnteredGender] = useState('');

    const getAgeHandler = (event) =>{
       setEnteredAge(event.target.value);
      
    }
    const getHeightHandler = (event) =>{
       setEnteredHeight(event.target.value);
      
    }
    const getWeightHandler = (event) =>{
         setEnteredWeight(event.target.value);
      
    }
    // const getGenderHandler = (event) =>{
    //    setEnteredGender(event.target.value);
      
    // }
     const submitHandler = (event) =>{
          event.preventDefault();
          const UserData ={
              userAge:enteredAge,
              userHeight:enteredHeight,
              userWeight:enteredWeight,
          }
          console.log(UserData);
     }

  return (
      <div className="search__container"> 
          <form onSubmit={submitHandler} className="search__inputs" > 
          {/* Age */}
          <div className="search__input">
            
            <input type='number' value={enteredAge} onChange={getAgeHandler}  placeholder="Age" />
          </div>
          {/* Height */}
          <div className="search__input">
            
            <input type='number' value={enteredHeight} onChange={getHeightHandler} placeholder="Height (cm)" />
          </div>
          {/* Weight */}
          <div className="search__input">
             
            <input  type='number' value={enteredWeight} onChange={getWeightHandler} placeholder="Weight (kg)" />
          </div>
          {/* Gender */}
          {/* <div >
             
             <div>
                <input type="radio" value="Male" name="gender" /> Male
                <input type="radio" value="Female" name="gender" /> Female
                <input type="radio" value="Other" name="gender" /> Other
             </div>
          </div> */}
             {/* Button */}
            <button type='submit'> Calculate </button>
          
          </form>
      
      </div>
  );
}
export default UserSearch;