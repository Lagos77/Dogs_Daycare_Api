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
        <div>
           <h1>Register</h1>
            <h2>Registered owners and dogs are showed here!</h2> 
             <div className="ownerInfo">          
                 <p>Owner name : {selectedDog.owner.name} </p>
                 <p>Owner lastname : {selectedDog.owner.lastName}</p>
                 <p>Contact : {selectedDog.owner.phoneNumber}</p>
             </div>
            <Link to="/dogs">
            <button className="navButton">Navigate back to dogs</button>
            </Link>
        </div>
    )

}

export default Register;