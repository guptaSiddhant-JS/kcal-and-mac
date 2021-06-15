import styles from './NavBar.module.css';
import HelpIcon from '@material-ui/icons/Help';

const NavBar = () =>{
    return(
        <>
          <div className={styles.nav}> 
                 <div>
                     <h1 className={styles.heading}>kcal & mac</h1>
                 </div>
                 <div className={styles.tags} >
                     <h3 >Services</h3>
                    <HelpIcon />
                 </div>
                 
          </div>
        </>
    );
}
export default NavBar;