import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const CreateUser = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Hello create USER</h1>

		</div>
	);
}; 

export default CreateUser;