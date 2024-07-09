import { Link } from "react-router-dom";
import styles from "./Cabecera.module.css";
import logo from "./logo-alura.svg";
import CabeceraLink from "../CabeceraLink/CabeceraLink";

function Cabecera (){
    return (
        <header className={styles.cabecera}>
            <Link to={"/"}>
                <section className={"styles.logoContainer"}>
                    <img src={logo} alt="Logo alura"/>
                    <span> Cinema </span>
                </section>
            </Link>
            <nav>
                <CabeceraLink url="./">
                    home
                </CabeceraLink>
                <CabeceraLink url="./Favoritos">
                    Favoritos
                </CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera;