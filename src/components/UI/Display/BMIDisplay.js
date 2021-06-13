import Card from "../Card/Card.js";
import styles from "./BMIDisplay.module.css";

const BMIDisplay = (props) =>{
  const BMI = props.result;
  return(
    <>
      <Card className={styles.mainCard}>
          <h2>BMI:</h2><h1>{BMI}</h1>
           
         </Card>
      </>
  );
}
export default BMIDisplay;
// Below 18.5	Underweight
// 18.5–24.9	Healthy
// 25–29.9	Overweight
// 30 and above	Obese