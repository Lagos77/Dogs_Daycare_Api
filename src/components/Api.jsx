import React from "react";

class Api extends React.Component {

    state = {
        loading: true,
        dogs: [],
        owner: []
    };

    async componentDidMount() {
        const url = "https://api.jsonbin.io/b/624ddc6f5912290c00f5af18";
        const response = await fetch(url);
        const data = await response.json();
        this.setState( {dogs: data, loading: false});
        //console.log(data.owner);
        //this.setState( {owner: data.owner});

    }

    render() {

        if (this.state.loading){
            return <div>Loading...</div>;
        }

        if (!this.state.dogs.length) {
            return <div>Didn't get a dog</div>
        }

        const dogsList = [];

        this.state.dogs.forEach(dog => {
            dogsList.push(
            <div key={dog.chipNumber}>
              <img src={dog.img} />
              <div>Name : {dog.name}</div>
              <div>Age : {dog.age}</div>
              <div>Breed : {dog.breed}</div>
              <div>Chipnumber : {dog.chipNumber}</div>
               <br />
           </div> 
            );
        });

        const dogOwner = [];

        this.state.owner.forEach(own => {
            dogOwner.push(
                <div key={own.phoneNumber}>
                    <div>Name : {own.name}</div>
                    <div>Lastname : {own.lastName}</div>
                    <div>Phone : {own.phoneNumber}</div>
                </div>
            )
        })

        return (
            <div>
                {dogsList}
            </div>
        );
    }

}

export default Api;