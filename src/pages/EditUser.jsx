import { Link, useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState } from "react";

export const EditUser = () => {
	const { contact_id } = useParams()
	const { store, dispatch } = useGlobalReducer()
	const navigate = useNavigate();
	

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [addres, setAddres] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const editContact = { name, email, phone, addres };

		try {
			const response = await fetch(`https://playground.4geeks.com/contact/agendas/MarceloCambero/contacts/${contact_id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(editContact),
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			console.log(data);
			//REDIRECCION SI LO AS ECHO BIEN

			navigate("/");


		} catch (error) {
			console.error("Hubo un problema con la solicitud:", error);
		}

	}



	return (
		<div className="text-center mt-5">
			<Link to="/">
				<button className="btn btn-primary">Or get back to contacts</button>
			</Link>

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Name"
				/>
				<p></p>
				<input
					type="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
				/>
				<p></p>
				<input
					type="text"
					name="phone"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					placeholder="Phone"
				/>
				<p></p>
				<input
					type="text"
					name="addres"
					value={addres}
					onChange={(e) => setAddres(e.target.value)}
					placeholder="Address"
				/>

				<button type="submit" className="btn btn-primary">
					Edit Contact
				</button>
			</form>
		</div>
	);
};

export default EditUser