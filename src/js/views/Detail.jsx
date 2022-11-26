import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";


const Detail = () => {
    const { actions } = useContext(Context);
    const {section, id} = useParams();
    const [list, setList] = useState([]);
    const [newType, setType] = useState(section);
    

    if (newType === "people") {setType("characters");}

    useEffect(() => {
        console.log("Section es: "+section)
        actions.getDetail(section, id).then((response) => setList(response)).catch((error) => console.log("Error: " + error));
    }, [])


    return (<div className="row bg-black">
            <div className="col m-5 d-flex justify-content-center">
                <img src={`https://starwars-visualguide.com/assets/img/${newType}/${id}.jpg`}/>
            </div>

            <div className="col m-5" style={{color:"white"}}>
                <h1>{list.properties?.name}</h1>
                <p>{list.description}</p>
                <hr style={{border: "0", borderTop: "2px solid #ffec30"}}></hr>

                <div className="row">

                    <div className="col text-center">
                        <span>Name</span>
                        <p>{list.properties?.name}</p>
                    </div>

                    <div className="col text-center">
                        <span>Height</span>
                        <p>{list.properties?.height}</p>
                    </div>

                    <div className="col text-center">
                        <span>Hair color</span>
                        <p>{list.properties?.hair_color}</p>
                    </div>

                    <div className="col text-center">
                        <span>Eye color</span>
                        <p>{list.properties?.eye_color}</p>
                    </div>

                    <div className="col text-center">
                        <span>Birth Year</span>
                        <p>{list.properties?.birth_year}</p>
                    </div>

                    <div className="col text-center">
                        <span>Gender</span>
                        <p>{list.properties?.gender}</p>
                    </div>

                </div>

            </div>
        </div>)
}

/*Details: 
    Name
    Height
    Hair color
    Eye Color
    Birth Date
    Gender
    */

export { Detail };