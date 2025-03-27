import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const EditUser = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Hello EDit USER</h1>



    // QUE APUNTE EL FECTH A LA ID 
    // EL METODO QUE SEA PUT 
    //REDIRECCION SI LO AS ECHO BIEN

		</div>
	);
}; 

export default EditUser