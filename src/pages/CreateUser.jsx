import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export const CreateUser = () => {

  const {store, dispatch} =useGlobalReducer()

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [addres, setAddres] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
  
      const newContact = { name, email, phone, addres };

      try {	
        const response = await fetch("https://playground.4geeks.com/contact/agendas/camberotje/contacts", {
          method: "POST",
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify(newContact),
        });
  
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const data = await response.json();
          console.log(data);
          //REDIRECCION SI LO AS ECHO BIEN

  
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
          Create Contact
        </button>
      </form>
    </div>
  );
};

export default CreateUser;