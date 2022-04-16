import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Info = ({dogs}) => {

    const dogList = []

    dogs.forEach(dog => {

        dogList.push(
            <div key={dog.chipNumber}>
                <div className="selectInfo">
                    <img src={dog.img} alt=""/> 
                        <div className="dogSpec">
                            <p>Name : {dog.name}</p>           
                            <p>Age : {dog.age}</p>
                            <p>Sex : {dog.sex}</p>
                            <p>Breed : {dog.breed}</p>
                            <p>Chipnumber : {dog.chipNumber}</p>
                            <p>Dog is {dog.present ? "present" : "not present"}</p>
                         </div>
                </div>
                    <div className="dogSelected" key={dog.chipNumber}>
                        <Link to={`/register/${dog.chipNumber}`}>
                            <button className="ownerinfo">See owner information</button>
                        </Link> 
                    </div>      
                <br />
            </div> 
        );
    });

    return (
        <div>
            <div>
                <h1>Info</h1>
                {dogList}
            </div>
        </div>
    )

}

export default Info;