import React from "react";

const Register = ({nextScreen}) => {

    return (
        <section>
           <h1>Register</h1>
            <h2>Registered owners and dogs are showed here!</h2>
            <button onClick={nextScreen}>Navigate to Info</button>
        </section>
    )

}

export default Register;