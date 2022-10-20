import React from "react";
import {
    BrowserRouter,
    Route,
    Switch
} from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import {
    Home
} from "./views/home.jsx";

import {
    Demo
} from "./views/demo";

import {
    Single
} from "./views/single";

import {
    SinglePlanets
} from "./views/singlePlanets.jsx";

import injectContext from "./store/appContext";

import {
    Navbar
} from "./component/navbar.jsx";

import {Login} from "./component/Login.jsx"

import {Registrarse} from './component/registrarse.jsx'

import {
    Footer
} from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return ( 
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                <Navbar />
                <Switch>
                    <Route exact path = "/"> 
                        <Home />
                    </Route>

                    <Route exact path = "/demo">
                        <Demo />
                    </Route>

                    <Route exact path = "/Login">
                        <Login />
                    </Route>

                    <Route exact path = "/registrarse">
                        <Registrarse />
                    </Route>

                    <Route exact path = "/single/:theid">
                        <Single />
                    </Route>

                    <Route exact path = "/SinglePlanets/:theid">
                        <SinglePlanets />
                    </Route>

                    <Route>
                        <h1>Not found!</h1>
                    </Route >
                </Switch>
                <Footer />
                </ScrollToTop> 
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);