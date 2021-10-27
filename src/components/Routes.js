import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Prestamo from "./Prestamo.js";
import Inicio from "./Inicio.js";
import After from "./Afterprestamo.js";

const Ruta = () =>
{
    return (
        <>
<Router>
	<Route path="/" exact component={Inicio} />
    <Route path="/prestamos" component={Prestamo} />
    <Route path="/after" component={After} />
   
</Router>
</>
        
    );
    
};
export default Ruta;