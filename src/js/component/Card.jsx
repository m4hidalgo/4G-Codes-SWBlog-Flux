import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Card = (props) => {
    const { store, actions } = useContext(Context);
    const {uid, name, type} = props;

    const [newType, setNewType] = useState(type);
    const [like, setLike] = useState(false);

    if (newType === "people") {setNewType("characters");}

    const handleClick = () => {
        if (!like){
            actions.addFavorite(uid, name);
            setLike(true);
        }

        if (like) {
            actions.removeFavorite(uid);
            setLike(false);
        }
    }

    /*useEffect(() => {
        

    }, [like])*/


    return (
        <div className="col m-3">
            <div className="card" style={{width: "18rem"}}>
                    <Link to={`/${type}/${uid}`}>
                        <img 
                            src={`https://starwars-visualguide.com/assets/img/${newType}/${uid}.jpg`} 
                            className="card-img-top" />
                    </Link>
                <div className="card-body d-flex">
                    <span className="card-text my-auto">{name}</span>
                    <button type="button" value={name} name={name} className="btn btn-warning ms-auto" onClick={handleClick}>{like ? "❤️" : "🤍"}</button>
                </div>
            </div>
        </div>

    );

}

//❤️🤍

export default Card;