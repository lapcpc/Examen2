import React,{useState} from "react";
import ReactDom from "react-dom";

import Nav from "./Nav";
import Balance from "./Balance";
import { auth } from "./firebase";
const Inicio = () =>
{
    return ( <>
             <Nav />

            <Balance />
                            
             </>
    );
    
};
export default Inicio;