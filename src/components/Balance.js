
import Nav from "./Nav";
import {updateDoc,query, where,doc,deleteDoc, onSnapshot , collection, getDocs } from "firebase/firestore";
import { db , auth} from "./firebase";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import  { useHistory } from 'react-router-dom'
const Balance = () =>


{
  let history= useHistory();

  const user = auth.currentUser;

  const [data, setData] = useState([]);
  
  const usersCollectionRef =collection(db, "Libros") ;
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setData(data.docs.map((doc) => ({ ...doc.data()})));
      
    };
 //console.log(new Date(data[0].FechaFin * 1000).toLocaleDateString("en-US"))
    getUsers();
  }, []);


  const borrar = async (e) =>{
   // console.log(e.target.name)
   
    
     
    console.log(docid)
   
      await deleteDoc(doc(db, "gastos", docid));
      document.getElementById(docid).style.display = "none";
  }



  const [docid, setDocid] = useState("");
  const actualizar = (e) =>{
    setDocid(e.target.name)
    console.log(docid)
  }
  const regresar = async (e) =>{
    // console.log(e.target.name)
    
  
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      
     console.log(docid)
    
     const washingtonRef = doc(db, "Libros", docid);

     // Set the "capital" field of the city 'DC'
     await updateDoc(washingtonRef, {
       disponibilidad: "False",
       Estado: "libre para prestamo"

     });

     history.push('/after')
   }
   //c
  //console.log(docid)

//console.log(data)
  
// data should now be set and ready to be used in your components
 

 
    
    return (
        <>
      <h1 >Datos Financieros</h1>
      <br>
      </br>
      <table class="table">
  <thead>
    <tr>
    <h3>  Libros de la librería </h3>
    </tr>
  </thead>
  <tbody>
    
      
  {data.map((data) => (
      
        <>
        
    <tr id={data.docid}>
      <th scope="row">  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16">
  <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
</svg>
      </th>
      <th>{data.nombre}</th>
      
      <th>{data.Estado}</th>
      <>
      { data.disponibilidad === "True" ?
      (<>
      <th>{new Date(data.FechaFin * 1000).toLocaleDateString("en-US")
}</th>
      <th>{new Date(data.FechaPrestamo * 1000).toLocaleDateString("en-US")
}</th>
      <th>{data.IdAlumno}</th>

      <th ><button name={data.docid} onMouseOver={actualizar} onClick={regresar}>Regresar</button></th>

      </>):(
        <>
         <th><Link to={
          {
              pathname:'/prestamos',
              aboutProps:{
                  name :data.docid

              }
          }

      }>Prestar</Link></th>
        </>
      )

      }

      </>
     
      
    </tr>

        </>
      ))}
    
    
    
  </tbody>
  </table>
 
        </>
    );
    
};
export default Balance;