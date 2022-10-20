import React, {useContext} from "react";
import {
    Link
} from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";


export const Navbar = () => {
    const { store, actions } = useContext(Context); 
    let auth = store.auth
    let navegacion = useHistory()

    const logOut = () => {
        let logeo = actions.loginout()
        if(!logeo){navegacion.push("/")}
    }

    return (
        <>
        <nav className = "navbar bg-light" >
            <div className = "container-fluid" >
                <a className = "navbar-brand" href = "#" >
                    <img src = "https://logos-world.net/wp-content/uploads/2020/11/Star-Wars-Logo.png"
                        alt = ""
                        width="60px"
                        height="45px"
                        className="d-inline-block align-text-top" />
                </a>     

                {auth?<div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" 
                    href="#" role="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false" >
                    Favoritos ❤</a> 
                    <ul className="dropdown-menu" >
                        {store.favoritos.map((item, id) => (
                        <li key={id}>
                            <a className="dropdown-item" onClick={() => actions.favorites(item)}>
                            {item} <i class="fa fa-trash float-end"></i></a>
                        </li>))}
                    </ul> 
                    </div>:null }
                    <div>
                    {auth? <button type="button" className="btn btn-outline-dark" onClick={logOut}>Que la fuerza me acompañe!</button> : null}
                    </div>
            </div> 
        </nav>
    </>
  );
};