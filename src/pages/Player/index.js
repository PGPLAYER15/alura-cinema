import Banner from "components/Banner";
import styles from "./Player.module.css"
import Titulo from "components/Titulo";
import videos from "data/db.json"
import { useParams } from "react-router-dom";
import NotFound from "pages/NotFound";
import { useEffect, useState } from "react";

function Player(){

    const [video , setvideo] = useState([]);
    

    const parametros = useParams();
/*     const video = videos.find(video=> video.id === Number(parametros.id))
 */

    useEffect(()=>{
        fetch(`https://my-json-server.typicode.com/PGPLAYER15/alura-cinema-api/videos?id=${parametros.id}`)
        .then(response => response.json())
        .then(data=>{
            setvideo(...data)
        })

    },[])
    console.log(video);

    if(!video) return <NotFound/>
        
    return(
        <>
            <Banner img="player" color="#58B9AE"/>
            <Titulo>
                <h1> Player </h1>
            </Titulo>
            <section className={styles.container}>
            <iframe width="80%" height="80%" 
            src={video.link}
            title={video.titulo} 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </section>
        </>
    )
}

export default Player;