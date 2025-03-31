import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {useNavigate} from "react-router-dom"

const Card = (props) => {
    const { dispatch } = useGlobalReducer()
    const navigate = useNavigate()


    const deleteContact = async (contact_id) => {
        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/MarceloCambero/contacts/${contact_id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            dispatch({
                type: "deleteContact",
                payload: contact_id
            })

        } catch (error) {
            console.error("Hubo un problema con la solicitud:", error);
        }
    };

    return (
        <div>
            <div className="card" style={{ "width": "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.contactName}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    {props.contactEmail && <li className="list-group-item"><i className="fa-solid fa-envelope me-2"></i> {props.contactEmail}</li>}
                    {props.contactPhone && <li className="list-group-item"><i className="fa-solid fa-phone me-2"></i> {props.contactPhone}</li>}
                    {props.contactAddress && <li className="list-group-item"><i className="fa-solid fa-house me-2"></i> {props.contactAddress}</li>}
                </ul>
                <div className="card-body d-flex">
                    <button type="button" className="btn btn-danger me-3" onClick={() => deleteContact(props.contactId)}>Delete Contact</button>
                    <button type="button" className="btn btn-warning" onClick={() => navigate(`/EditUser/${props.contactId}`)}>Edit Contact</button>
                </div>
            </div>

        </div>
    )


}

export default Card;