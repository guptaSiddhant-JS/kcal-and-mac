import style from './NavBar.module.css';
const NavBar = () =>{
    return(
        <>
        <div className={style.img}> </div>
        <div className={style.nav}>
           <h1 className={style.header}>Kcal & Mac </h1>
           
           <p className={style.para}>“When Diet Is Wrong, Medicine Is of No Use. When Diet Is Correct, Medicine Is of No Need.”</p>
           <p className={style.para}>Poor nutrition can result in nutrient deficiency diseases
            like blindness,anaemia, scurvy, preterm birth, stillbirth, and cretinism, as well 
            as nutrient excess health-threatening conditions like obesity and metabolic syndrome, 
            as well as common chronic systemic diseases like cardiovascular disease, diabetes, and
             osteoporosis. In severe situations of malnutrition, wasting can occur..</p>
        </div>
        </>
    );
}
export default NavBar;