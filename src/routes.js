import Favoritos from "pages/Favoritos";
import Player from "pages/Player";
import NotFound from "pages/NotFound";
import PaginaBase from "pages/PaginaBase";
import Inicio from "pages/Inicio";
import  { BrowserRouter, Routes, Route }from "react-router-dom"

function AppRoutes(){
    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PaginaBase/>}>
                        <Route inxex element={<Inicio/>} > </Route>
                        <Route path="favoritos" element={<Favoritos/>}/>
                        <Route path=":id" element={<Player/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes;