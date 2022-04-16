import React from "react";
import { Link, useParams } from "react-router-dom";

const Register = ({dogs}) => {

    const params = useParams()
    console.log(params.chipNumber)

    let selectedDog = null

    dogs.forEach(dog => {
        if (dog.chipNumber === params.chipNumber) {
            selectedDog = dog
        }
    });


    return (
        <section>
           <h1>Register</h1>
            <h2>Registered owners and dogs are showed here!</h2>           
            <div>Owner name : {selectedDog.owner.name} </div>
            <div>Owner lastname : {selectedDog.owner.lastName}</div>
            <div>Contact : {selectedDog.owner.phoneNumber}</div>
            <Link to="/dogs">
            <button>Navigate back to dogs</button>
            </Link>
        </section>
    )

}

export default Register;