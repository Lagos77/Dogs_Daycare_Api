import React from "react";

const Welcome = ({nextScreen}) => {

    return (
        <section>
           <h1>Welcome to my Dog-app</h1>
            <h2>Made by Lagos77</h2>
            <button onClick={nextScreen}>Enter</button>
        </section>
    )

}

export default Welcome;