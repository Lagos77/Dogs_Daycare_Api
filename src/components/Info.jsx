import React from "react";
import { Link } from "react-router-dom";

const Info = ({dogs}) => {

    const dogList = []

    dogs.forEach(dog => {

        dogList.push(
            <div key={dog.chipNumber}>
            <img src={dog.img} alt=""/>
            <div>Name : {dog.name}</div>   
                <div className="dogSelected" key={dog.chipNumber}>
                  <Link to={`/register/${dog.chipNumber}`}>
                  <button className="ownerinfo">See owner information</button>
                  </Link> 
                </div>      
            <div>Age : {dog.age}</div>
            <div>Breed : {dog.breed}</div>
            <p>Dog is {dog.present ? "present" : "not present"}</p>
            <div>Chipnumber : {dog.chipNumber}</div>
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