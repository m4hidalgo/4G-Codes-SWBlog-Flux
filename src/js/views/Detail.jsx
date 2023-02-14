import React, {useState, useEffect, useContext, useMemo} from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";


const Detail = () => {
    const { actions } = useContext(Context);
    const {section, id} = useParams();
    const [list, setList] = useState({});
    const [ name, setName ] = useState('')
    const [newType, setType] = useState(section);
    

    if (newType === "people") {setType("characters");}

    useMemo(() => {
        console.log("Section es: "+section)
        //actions.getDetail(section, id)
        actions.getDetail(section, id)
            .then((response) => {
                setList(response)
            })
            .catch((error) => console.log("Error: " + error));
        //console.log(list)
    }, [])

    if (section === 'planets'){

        useEffect(() => {
            setName(list.name)

            let newlist = list;

            delete newlist.created;
            delete newlist.edited;
            delete newlist.name;
            delete newlist.url;

            //console.log("newList: ", newlist)
            setList(newlist);
        }, [list])

    }

    if (section === 'species'){
        useEffect(() => {
            setName(list.name)

            let newlist = list;

            delete newlist.created;
            delete newlist.edited;
            delete newlist.name;
            delete newlist.url;
            delete newlist.homeworld;
            delete newlist.people;

            //console.log("newList: ", newlist)
            setList(newlist);
        }, [list])
    }

    if (section === 'people'){
        useEffect(() => {
            setName(list.name)

            let newlist = list;

            delete newlist.created;
            delete newlist.edited;
            delete newlist.name;
            delete newlist.url;
            delete newlist.homeworld;
            delete newlist.people;

            //console.log("newList: ", newlist)
            setList(newlist);
        }, [list])
    }

    if (section === 'starships'){
        useEffect(() => {
            setName(list.name)

            let newlist = list;

            delete newlist.created;
            delete newlist.edited;
            delete newlist.name;
            delete newlist.url;
            delete newlist.homeworld;
            delete newlist.people;
            delete newlist.pilots;

            //console.log("newList: ", newlist)
            setList(newlist);
        }, [list])
    }

    if (section === 'vehicles'){
        useEffect(() => {
            setName(list.name)

            let newlist = list;

            delete newlist.created;
            delete newlist.edited;
            delete newlist.name;
            delete newlist.url;
            delete newlist.homeworld;
            delete newlist.people;
            delete newlist.pilots;
            delete newlist.films;

            //console.log("newList: ", newlist)
            setList(newlist);
        }, [list])
    }

    if (section === 'films'){
        useMemo(() => {
            setName(list.title)

            let newlist = list;

            delete newlist.created;
            delete newlist.edited;
            delete newlist.url;
            delete newlist.characters;
            delete newlist.planets;
            delete newlist.starships;
            delete newlist.vehicles;
            delete newlist.species;
            delete newlist.opening_crawl;

            console.log("newList: ", newlist)
            setList(newlist);
        }, [list])
    }
    

    return (<div className="row bg-black" style={{paddingBottom: "15rem"}}>
            <div className="col m-5 d-flex justify-content-center">
                <img src={`https://starwars-visualguide.com/assets/img/${newType}/${id}.jpg`}/>
            </div>

            <div className="col m-5" style={{color:"white"}}>
                <h1>{name}</h1>
                <hr style={{border: "0", borderTop: "2px solid #ffec30"}}></hr>

                <div className="row">

                {Object.keys(list).map ( (item, index) => (
                    <div className="col text-center">
                        <span key={index}>{item}</span>
                        <p>{list[item]}</p>
                    </div>
                ))}

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