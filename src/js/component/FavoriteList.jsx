import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

const FavoriteList = () => {
    const {store, actions} = useContext(Context);
    

    return (
        <div>
            {Object.keys(store.favorites).map((keyName, id) => {
                
                return (
                    <li className="row" key={id}>
                        <div className="col mx-3 d-flex">
                            
                            {store.favorites[keyName].label}
                            <a href="#" 
                                className="col-1 text-end ms-auto" 
                                onClick={() => actions.removeFavorite(id)} 
                                style={{fontWeight:"bold", textDecoration:"none", color: "black"}}>
                                    ✕
                            </a>

                            <hr></hr>
                        </div>
                    </li>
                    )})
                
            }
        </div>
    );
}



export {FavoriteList};