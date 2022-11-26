import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import Card from "../component/Card.jsx";

const Section = () => {
    const { store, actions } = useContext(Context);

    const {section} = useParams(); 
    

    useEffect(() => {
        
        actions.getData();
        console.log(store);
        console.log(store.favorites);

    }, []);

    const list = store[`${section}`];

    return (<div className="bg-black">
        <div className="row">
            {list.map((element) => {

                if (element.length !== 0) {
                            
                    return (<Card
                        key={element.uid}
                        uid={element.uid}
                        type={section}
                        name={(section === "films") ? element.properties.title : element.name}
                        
                    />)
                }
            })}
        </div>
    </div>);
}

export {Section};