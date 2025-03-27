import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const CreateUser = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">

      <Link to="/">
              <button className="btn btn-primary">Or get back to contacts</button>
            </Link>

		</div>
	);
}; 

export default CreateUser;