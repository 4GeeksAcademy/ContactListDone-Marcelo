import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card.jsx"

// https://playground.4geeks.com/contact/agendas/camberotje/contacts 

export const Home = () => {
	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {

		const fetchContacts = async () => {
			try {
				const response = await fetch('https://playground.4geeks.com/contact/agendas/MarceloCambero');
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				const data = await response.json();
				
				dispatch({
					type: "setContacts",
					payload: data.contacts
				})

			} catch (error) {
				console.error("Hubo un problema con la solicitud:", error);
			}

		};

		fetchContacts();
	}, []);


	return (
		<div className="container text-center mt-5">
			<Link to="/CreateUser">
				<button className="btn btn-success my-5">Add New contact</button> </Link>

			<div className="row">
				{store.contacts !== null &&
					store.contacts.map((contact, index) => (
						<div className="col-12 col-md-6 col-lg-4 col-xxl-3 mb-5" key={index}>
							<Card
								contactName={contact.name}
								contactEmail={contact.email}
								contactPhone={contact.phone}
								contactAddress={contact.address}
								contactId = {contact.id}
							/>
						</div>

					))}
			</div>



		</div>
	);
};

export default Home