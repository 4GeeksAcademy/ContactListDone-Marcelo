import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// https://playground.4geeks.com/contact/agendas/camberotje/contacts 

export const Home = () => {

const [listaContactos, setListaContactos] = useState(null);
const {store, dispatch} =useGlobalReducer()

  useEffect(() => {

	const fetchContacts = async () => {
		try {	
		 const response = await fetch('https://playground.4geeks.com/contact/agendas/camberotje');
		 if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		 const data = await response.json();
		 console.log(data);

		 setListaContactos([...data.contacts]);

		  console.log(listaContactos);
      
		} catch (error) {
			console.error("Hubo un problema con la solicitud:", error);
		}

	};
	fetchContacts();
	}, []);

	function addNewContact(id) {
		console.log(id)
	} 
		
	return (
		<div className="text-center mt-5">
			<Link to="/CreateUser">
				<button className="btn btn-primary">Add New contact</button> </Link>
				{listaContactos !== null &&
          			listaContactos.map((contact, index) => (
            			<li key={index}>
              			{contact.name} - {contact.email} - {contact.phone}  
						<button onClick={() => addNewContact(contact.id)}>Agregar contacto</button> 
						<button></button>
           				 </li>
          ))}
		
		</div>
	);
}; 

export default Home