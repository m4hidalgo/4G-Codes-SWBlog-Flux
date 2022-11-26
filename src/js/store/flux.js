const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			films: [],
			species: [],
			starships: [],
			vehicles: [],
			planets: [],
			favorites: []

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/	
				const targets = ["people", "films", "species", "starships", "vehicles", "planets"];
				const baseURL = "https://www.swapi.tech/api/";
				

				try {
					targets.forEach(async (element) => {
						
						
						const response = await fetch(`${baseURL}${element}`);

						if (element === "films"){
							const {result} = await response.json();
							setStore({"films": result});  
						}

						 
						else {
							const {results} = await response.json();
							setStore({[element]: results});
						}
					});
				
				} catch (error) {
					console.error("GET error: ", error);
				}
				
			},

			getDetail: async (target, id) => {

				try {
					const baseURL = "https://www.swapi.tech/api/";
					const newTarget = target;
					const response = await fetch(`${baseURL}${newTarget}/${id}`); 
			
					const {result} = await response.json();
						console.log(result);
						return result;
				}
				catch (error) {
					console.error("GET error: ", error);
				}
			},

			addFavorite: (uid, name) => {
				const store = getStore();

				store.favorites.push({uid: uid, label: name, fav: true});
				setStore({ ...store});
			},

			removeFavorite: (element) => {
				const store = getStore();

				store.favorites.splice(store.favorites.indexOf(element)-1, 1);
				setStore({ ...store});

				
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
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
