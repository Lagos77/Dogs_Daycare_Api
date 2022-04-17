import React from "react";
import { Link } from "react-router-dom";
import '../css components/Info.css';


const Info = ({dogs}) => {

    const dogList = []

    dogs.forEach(dog => {

        dogList.push(
            <div key={dog.chipNumber}>
                <div className="card-container">
                    <div className="image-container">
                        <img src={dog.img} alt=""/> 
                    </div>
                        <div className="card-content">
                             <div className="dog-name">
                                <h3>{dog.name}</h3>
                            </div>
                            <div className="dog-info">           
                                <p>Age : {dog.age}</p>
                                <p>Sex : {dog.sex}</p>
                                <p>Breed : {dog.breed}</p>
                                <p>Chipnumber : {dog.chipNumber}</p>
                                <p>Dog is {dog.present ? "present" : "not present"}</p>
                            </div>
                        </div>

                        <div className="btn" key={dog.chipNumber}>
                            <Link to={`/register/${dog.chipNumber}`}>
                                 <button>
                                    <a>
                                      See owner information
                                    </a>
                                 </button>
                            </Link> 
                        </div>                             
                </div>  

            </div> 
        );
    });

    return (
        <div>
            <h1 className="info-title">Registered dogs at daycare</h1>
            <div className="content">
                {dogList}
            </div>
        </div>
    )

}

export default Info;