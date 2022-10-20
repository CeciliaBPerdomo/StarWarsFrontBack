const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            personajes: [],
            personaje: {},
            planets: [],
            planet: {},
            favoritos: [],
            auth: false
        },

        actions: {
            // Todos los personajes
            obtenerCharacters: async () => {
                try {
                    const response = await fetch("https://swapi.dev/api/people")
                    const data = await response.json()
                    setStore({
                        personajes: data.results
                    })
                } catch (error) {
                    console.log(error)
                }
            },

            // Personaje individual
            obtenerPersonaje: async (id) => {
                try {
                    const response = await fetch("https://swapi.dev/api/people/" + id)
                    const data = await response.json()
                    //console.log(data)
                    setStore({
                        personaje: data
                    })
                } catch (error) {
                    console.log(error)
                }
            },

            // Todos los planetas
            obtenerPlanets: async () => {
                try {
                    const response = await fetch("https://swapi.dev/api/planets/")
                    const data = await response.json()
                    //console.log(data.results)
                    setStore({
                        planets: data.results
                    })
                } catch (error) {
                    console.log(error)
                }
            },

            //Planeta individual
            obtenerPlaneta: async (id) => {
                try {
                    const response = await fetch("https://swapi.dev/api/planets/" + id)
                    const data = await response.json()
                    //console.log(data.results)
                    setStore({
                        planet: data
                    })
                } catch (error) {
                    console.log(error)
                }
            },

            // Favoritos
            favorites: (item) => {
                const store = getStore();
                if (store.favoritos.includes(item)) {
                    // Si esta incluido, que lo borre
                    const actions = getActions()
                    actions.removeFavorito(item)
                } else {
                    setStore({
                        favoritos: [...store.favoritos, item]
                    })
                    //console.log(store.favoritos)
                }

            },

            // Borra favorito
            removeFavorito: (item) => {
                const store = getStore();
                //console.log(item)
                let sinEliminar = []
                //setStore(store.favoritos.filter((elem) => elem !== item))
                //console.log(store.favoritos)
                sinEliminar = store.favoritos.filter((elem) => elem !== item)
                //console.log(sinEliminar)
                setStore({
                    favoritos: sinEliminar
                })
                //console.log(store.favoritos)
            },

            // Logueo
            login: async (email, password) => {
                try {
                    const response = await fetch('https://3000-ceciliabper-starwarscon-o02bkm0edan.ws-us72.gitpod.io/login', {
                        method: 'POST',
                        body: JSON.stringify({
                            email: email,
                            password: password
                        }),
                        headers: {
                            "Content-type": "application/json"
                        }
                    })
                    if (response.status === 200) {
                        const data = await response.json()
                        localStorage.setItem('token', data.access_token)
                        console.log(data)
                        setStore({
                            auth: true
                        })
                        return true;
                    }
                } catch (error) {
                    console.log(error)
                    return false;
                }
            },

            // DesLogueo
            loginout: () => {
                localStorage.removeItem('token')
                setStore({
                    auth: false
                })
                return false
            },

            // Use getActions to call a function within a function
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;