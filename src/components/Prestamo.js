

import Nav from "./Nav";
import React,{useState} from "react";
import {db,auth} from "./firebase";
import {query, where, } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import  { useHistory } from 'react-router-dom'
import {  setDoc } from "firebase/firestore";
const Gastos = (props) =>
{
    const user = auth.currentUser;
    const [nombre, setUsuario] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [descripcion, setDescripcion] = useState("");
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
		setCantidad(e.target.value);
		}else if (e.target.name === "descripcion"){
        setDescripcion(e.target.value);
        }
	
};

let history= useHistory();

const onSubmit  = async (e) =>{
e.preventDefault();

   
try {
    const docRef = await setDoc(query( collection(db, "gastos"), where("u_id", "==", props.location.aboutProps.name)), {
        nombre: nombre,
        cantidad: cantidad,
        descripcion:descripcion 
       
    
    });
    console.log("Document written with ID: ", docRef.id);
    
  
    history.push('/')
  } catch (e) {
    console.error("Error adding document: ", e);
    history.push('/gastos')
  }
//props.setSession(true);

}


    return (
        <>
            <Nav />

            <h1>Nuevo Gasto</h1>
            <form onSubmit={onSubmit}>
                    <div class="form-group">
                    <label for="formGroupExampleInput">Nombre</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" value={nombre} name="nombre" onChange={onChange}></input>
                   
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">Cantidad</label>
                    <input type="number" class="form-control" id="formGroupExampleInput" placeholder="Example input" value={cantidad} name="cantidad" onChange={onChange}></input>
                   
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Descripcion</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" value={descripcion} name="descripcion" onChange={onChange}></input>
                </div>
                
                <button type="submit" class="btn btn-primary" >Guardar</button>
        </form>
        </>
    );
    
};
export default Gastos;