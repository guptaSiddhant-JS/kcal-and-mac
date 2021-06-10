import style from './NavBar.module.css';
const NavBar = () =>{
    return(
        <div className={style.nav}>
           <h1 className={style.header}>Kcal & Mac</h1>
           <p className={style.para}>“When Diet Is Wrong, Medicine Is of No Use. When Diet Is Correct, Medicine Is of No Need.”</p>
           <p className={style.para}>It is a long established fact that a reader will
            be distracted by the readable content of a page when
             looking at its layout. The point of using Lorem Ipsum
              is that it has a more-or-less normal distribution of 
              letters, as opposed to using 'Content here, content here'
              , making it look like readable English. Many desktop publishing 
              packages and web page editors now use Lorem Ipsum as their default 
              model text, and a search for 'lorem ipsum' will uncover many web
               sites still in their infancy. Various versions have evolved over
                the years, sometimes by accident, sometimes on purpose (injected 
                humour and the like).</p>
        </div>
    );
}
export default NavBar;