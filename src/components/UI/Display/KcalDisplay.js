import Card from "../Card/Card.js";
import styles from "./KcalDisplay.module.css";
const KcalDisplay = () =>{
  const resKcal = 2000 ;
  const maintanace = resKcal;
  const eWL = resKcal - 500 ;
  const wL = resKcal - 250 ;
  const wG = resKcal + 250 ;
  const eWG = resKcal + 500 ;
  return(
      <>
         <Card className={styles.mainCard}>
            <Card className={styles.elementCard}>
              <p> Extreme Weight Loss (-500)</p> 
              <p> {eWL} kcals</p>
            </Card> 
            <Card className={styles.elementCard}>
              <p>  Weight Loss (-250)</p> 
              <p> {wL} kcals</p>
            </Card> 
            <Card className={styles.elementCard}>
              <p> Maintanace </p> 
              <p> {maintanace} kcals</p>
            </Card> 
            <Card className={styles.elementCard}>
              <p>  Weight Gain (+250)</p> 
              <p> {wG} kcals</p>
            </Card> 
            <Card  className={styles.elementCard}>
              <p> Extreme Weight Gain (+500)</p> 
              <p> {eWG} kcals</p>
            </Card>     
         </Card>
      </>
  );
}
export default KcalDisplay;