import { useFavoritosContext } from "components/Context/favorito";
import styles from "./Card.module.css";
import iconFavorito from "./iconFavorito.svg";
import iconNoFavorito from "./IconNoFavorito.svg"
import { Link } from "react-router-dom";

function Card ({id,capa,titulo}){
    const {favorito, AgregarFavorito} = useFavoritosContext();
    const isFavorito = favorito.some(fav=> fav.id === id);
    const icon = isFavorito ? iconFavorito : iconNoFavorito    
    return(
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`} >
                <img src={capa} alt={titulo} className="styles.capa"/>

                <h2> {titulo} </h2>
            </Link>

            

            <img src={icon} 
            alt="Icono Favorito" 
            onClick={()=> AgregarFavorito({id,titulo,capa})}/>
        </div>
    )
}

export default Card;