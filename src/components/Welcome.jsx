import React from "react";
import '../css components/Welcome.css'
import { Link } from 'react-router-dom';

const Welcome = () => {

    return (
        <div>
            <section>
             <h1>Welcome to my Dog-app</h1>
             <h2>Made by Lagos77</h2>
             <Link to="/dogs">
             <button className="enterButton">Enter</button>
             </Link>
            </section>
        </div>
    )

}

export default Welcome;