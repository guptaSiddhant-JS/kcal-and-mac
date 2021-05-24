import  './DisplayResult.css'
const DisplayResult = () =>{
     return (
          <div className="displayResult__container">
            <div className="displayResult__result" style={{color:"red"}}>
              <h4> Extreme Weight Loss (-500)</h4> 
              <h3> 1500 kcals</h3>
            </div> 
            <div className="displayResult__result" style={{color:"salmon"}}>
              <h4>  Weight Loss (-250)</h4> 
              <h3> 1850 kcals</h3>
            </div> 
            <div className="displayResult__result " style={{color:""}}>
              <h4> Maintanace </h4> 
              <h3> 2000 kcals</h3>
            </div> 
            <div className="displayResult__result " style={{color:"lightGreen"}} >
              <h4>  Weight Gain (+250)</h4> 
              <h3> 2250 kcals</h3>
            </div> 
            <div className="displayResult__result" style={{color:"green"}} >
              <h4> Extreme Weight Gain (+500)</h4> 
              <h3> 2500 kcals</h3>
            </div>  

          </div>
     );
}
export default DisplayResult;