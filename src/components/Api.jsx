import React from "react";

class Api extends React.Component {

    // constructor(props) {
    //     this.state = {
    //         loading: true,
    //         dogs: [],
    //         owner: []
    //     }
    // };

    // state = {
    //     loading: true,
    //     dogs: []
    // };

    // async componentDidMount() {
    //     const url = "https://api.jsonbin.io/b/624ddc6f5912290c00f5af18";
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     this.setState( {dogs: data, loading: false});

    // }

    // async componentDidMount() {
    //    await fetch("https://api.jsonbin.io/b/624ddc6f5912290c00f5af18")
    //     .then(resp => resp.json())
    //     .then(data =>{
    //         const dogsList = [];
    //         const dogShip = [];

    //         data.forEach(item =>{
    //             dogsList.push(item)

    //         });
    //         this.setState({
    //             dogs: [...this.state.dogs, ...dogsList]
    //         });
    //     });
    // }

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
              <img src={dog.img} alt=""/>
              <div>Name : {dog.name}</div>
              <div>Owner name: {dog.owner.name}</div>
              <div>Age : {dog.age}</div>
              <div>Breed : {dog.breed}</div>
              <div>Chipnumber : {dog.chipNumber}</div>
               <br />
           </div> 
            );
        });

        return (
            <div>
            
            </div>
        );
    }

    // render () {
    //     return (
    //         <div>
    //             {
    //                 this.state.dogsList.lenght !== 0 && <Api data={this.state}/>
    //             }
    //         </div>
    //     )
    // }

}

export default Api;