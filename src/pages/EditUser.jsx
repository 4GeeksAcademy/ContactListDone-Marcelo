import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const EditUser = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Hello EDit USER</h1>

		</div>
	);
}; 

export default EditUser