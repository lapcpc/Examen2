import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Formulario from "./Prestamo.js";
import Inicio from "./Inicio.js";

const Ruta = () =>
{
    return (
        <>
<Router>
	<Route path="/" exact component={Inicio} />
    <Route path="/prestamos" component={Formulario} />
   
</Router>
</>
        
    );
    
};
export default Ruta;