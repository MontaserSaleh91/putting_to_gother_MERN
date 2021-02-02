import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            age : this.props.age
        }
    }

    birthDay = () => {
        let pAge = this.state.age;
        pAge += 1;
        console.log(pAge);
        return this.setState({age: pAge});
    }

    render() {
        const {firstName, lastName, hairColor} = this.props;
        return(
            <>
                <h2>{firstName}, {lastName}</h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={ () =>  this.birthDay() }>Birthday Button for {this.props.firstName} </button>
            </>
    )
    }
}
    
export default PersonCard;