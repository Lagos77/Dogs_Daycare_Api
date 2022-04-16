import React from "react";
import { Link } from 'react-router-dom';

const Welcome = () => {

    return (
        <div>
            <section>
             <h1>Welcome to my Dog-app</h1>
             <h2>Made by Lagos77</h2>
             <Link to="/dogs">
             <button>Enter</button>
             </Link>
            </section>
        </div>
    )

}

export default Welcome;