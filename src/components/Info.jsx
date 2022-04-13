import React from "react";
import Api from "./Api";

const Info = ({nextScreen}) => {

    return (
        <section>
           <h1>Info</h1>
            <h2>You can see more info about the dogs here!</h2>
            <Api></Api>
            <br></br>
            <button onClick={nextScreen}>Go back to register</button>  
        </section>
    )

}

export default Info;