import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Characters} from '../component/Characters.jsx'
import { Planets } from "../component/Planets.jsx";
import { Login } from "../component/Login.jsx";
// import { Vehiculos } from "../component/Vehicles.jsx";

export const Home = () => {
	const {store} = useContext(Context)
	let auth = store.auth
	return(
		<div>
			<div>
				{!auth ?<Login />: null}
			</div>

			 <div>{auth ?<Characters />: null }</div><br />
			 <div>{auth ?<Planets />: null }</div><br />
			{/* <div className="d-inline"><Vehiculos /></div> */}
		</div> 
	)
};
