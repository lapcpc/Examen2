

import Nav from "./Nav";
import React,{useState} from "react";
import {db,auth} from "./firebase";
import {query, where, } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc,doc,updateDoc } from "firebase/firestore";
import  { useHistory } from 'react-router-dom'
import {  setDoc } from "firebase/firestore";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
const Prestamo = (props) =>
{
    const user = auth.currentUser;
    const [nombre, setUsuario] = useState("");
    const [cantidad, setCantidad] = useState(null);
    const [descripcion, setDescripcion] = useState(null);
    //const user = auth.currentUser.uid;
      
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
const onChange = (e) => {
		if(e.target.name === "nombre"){
      
			setUsuario(e.target.value);		
		}else if (e.target.name === "cantidad"){
      console.log(e.target.value)
		setCantidad(e.target.value);
		}else if (e.target.name === "descripcion"){
        setDescripcion(e.target.value);
        }
	
};

let history= useHistory();

const onSubmit  = async (e) =>{
e.preventDefault();
console.log(props.location.aboutProps.name)
const washingtonRef = doc(db, "Libros", props.location.aboutProps.name);

     // Set the "capital" field of the city 'DC'
     await updateDoc(washingtonRef, {
      IdAlumno: nombre,
      FechaFin: cantidad,
      FechaPrestamo:descripcion,
      disponibilidad:"True",
      Estado:"Prestado chaval"

     });
     console.log(props.location.aboutProps.name)

     history.push('/')
//props.setSession(true);

}


    return (
        <>
            <Nav />

            <h1>Nuevo Prestamo</h1>
            <form onSubmit={onSubmit}>
                    <div class="form-group">
                    <label for="formGroupExampleInput">ID del Alumno</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" value={nombre} name="nombre" onChange={onChange}></input>
                   
                </div>
                <div class="form-group">
                    
                    <label for="start">Start date:</label>

                    <DatePicker 
                    selected= {cantidad}
                    onChange={date=>setCantidad(date)}
                    dateFormat='dd/MM/yyyy'
                    isClearable
                    showYearDropdown
                    scrollableMonthYearDropdown
                    
                    />
                   
                </div>
                <div class="form-group">
                <label for="start">End date:</label>

                <DatePicker 
                    selected= {descripcion}
                    onChange={date=>setDescripcion(date)}
                    dateFormat='dd/MM/yyyy'
                    isClearable
                    showYearDropdown
                    scrollableMonthYearDropdown
                    
                    />
                   
                   
                </div>
                
                <button type="submit" class="btn btn-primary" >Guardar</button>
        </form>
        </>
    );
    
};
export default Prestamo;