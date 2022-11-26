import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { FavoriteList } from "../component/FavoriteList.jsx";

export const Navbar = () => {
	const { store } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-black text-center">
			
        <Link to="/" style={{textDecoration: "none"}}>
            <img className="mx-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png" style={{maxWidth:"10em"}}/>
        </Link>

		<div className="dropdown dropleft">
            <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle px-5 mx-4" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites <span>{store.favorites.length}</span>
            </button>
                <ul className="dropdown-menu mt-0 mx-4" aria-labelledby="dropdownMenuButton">
                    <FavoriteList />
                </ul>
        </div>
    
    	</nav>
	);
};
