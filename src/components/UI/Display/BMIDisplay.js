import Card from "../Card/Card.js";
import styles from "./BMIDisplay.module.css";
const BMIDisplay = (props) =>{
  const d= props.result;
  return(
    <>
      <Card className={styles.mainCard}>
           {d}
         </Card>
      </>
  );
}
export default BMIDisplay;