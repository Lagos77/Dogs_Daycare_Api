import React from "react";
import { Link, useParams } from "react-router-dom";
import '../css components/Register.css'

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
        <div className="owner-content">
           <h1>Owner information for dog {selectedDog.name}</h1>
            <h2>Info</h2> 
             <div className="owner-info">          
                 <p className="owner-name">Name : {selectedDog.owner.name} </p>
                 <p className="owner-lastname">Lastname : {selectedDog.owner.lastName}</p>
                 <p className="owner-contact">Contact : {selectedDog.owner.phoneNumber}</p>
                 <div className="owner-btn">
                    <Link to="/dogs">
                         <button>
                             <a>
                             Navigate back to dogs
                             </a>
                          </button>
                     </Link>
                 </div>
             </div>

        </div>
    )

}

export default Register;