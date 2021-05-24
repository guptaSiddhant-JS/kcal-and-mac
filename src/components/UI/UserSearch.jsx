import React, {useState} from 'react';
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
      <div> 
          <form onSubmit={submitHandler} > 
          {/* Age */}
          <div>
            <label>Age</label>
            <input type='number' value={enteredAge} onChange={getAgeHandler} />
          </div>
          {/* Height */}
          <div>
             <label>Height</label>
            <input type='number' value={enteredHeight} onChange={getHeightHandler} />
          </div>
          {/* Weight */}
          <div>
             <label>Weight</label>
            <input  type='number' value={enteredWeight} onChange={getWeightHandler} />
          </div>
          {/* Gender */}
          {/* <div>
             <label>Gender</label>
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