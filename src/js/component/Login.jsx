import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Login = () => {  

    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const {actions} = useContext(Context)
    let navegacion = useHistory()

    const ingreso = (e) => {
        e.preventDefault()

        let logged = actions.login(mail, password)

        logged ? navegacion.push("/") : null

        setMail("")
        setPassword("")
    }

    const unirse = (e) => {
        e.preventDefault()
        navegacion.push("/registrarse")
    }

    return(
        <form onSubmit={ingreso}>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">E-mail:</label>
                <input type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    onChange={(e) => setMail(e.target.value)}
                    value={mail} required/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
        
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
                value={password} required/>
            </div>
            
            <button type="submit" className="btn btn-outline-dark">Unete al lado oscuro!</button>
            <button type="submit" className="btn btn-outline-dark" onClick={unirse} 
            style={{margin: "10px"}}>Chewie... registrate!</button>
        </form>
    )
}