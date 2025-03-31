import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";



export const CreateUser = () => {

  const navigate = useNavigate();

  const { store, dispatch } = useGlobalReducer()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newContact = { name, email, phone, address };

    try {
      const response = await fetch("https://playground.4geeks.com/contact/agendas/MarceloCambero/contacts", {
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

      navigate("/");


    } catch (error) {
      console.error("Hubo un problema con la solicitud:", error);
    }

  }

  return (
    <div className="text-center mt-5">
      <button className="btn btn-warning my-5" onClick={() => {navigate("/")}}>Back to contacts</button>

      <form onSubmit={handleSubmit} className="container w-25 border rounded py-3 px-4 bg-light">

        <div class="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            class="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Marcelo"
          />
        </div>

        <div class="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            class="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Example@gmail.com"
          />
        </div>

        <div class="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            name="phone"
            class="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+34999999999"
          />
        </div>


        <div class="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            name="address"
            class="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Madrid"
          />
        </div>


        <button type="submit" className="btn btn-outline-success mt-2">
          Create Contact
        </button>
      </form>
    </div>
  );
};

export default CreateUser;