import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

//export const Login = () => { 
export const Registrarse = () => {

    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [userName, setUserName] = useState("")

    const {actions} = useContext(Context)
    let navegacion = useHistory()

    const registro = (e) => {
        e.preventDefault()
        //console.log(mail, password, nombre, apellido, userName)
        actions.registro(nombre, apellido, userName, mail, password)
        
        setMail("")
        setPassword("")
        setNombre("")
        setApellido("")
        setUserName("")

        // Inicia sesion
        let logged = actions.login(mail, password)
        logged ? navegacion.push("/") : null
    }

    return (
        <div>
            <h1>Unete y juntos dominaremos la Galaxia!!</h1>
            <br />
            <form onSubmit={registro}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                    <input type="text" className="form-control" 
                    id="exampleInputEmail1" aria-describedby="emailHelp"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    onChange={(e) => setApellido(e.target.value)}
                    value={apellido}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">UserName</label>
                    <input type="text" className="form-control" 
                    id="exampleInputEmail1" aria-describedby="emailHelp"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
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
                <button type="submit" className="btn btn-primary">Unirse!</button>
            </form>
        </div>
    )
}