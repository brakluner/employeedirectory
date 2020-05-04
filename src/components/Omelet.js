import React, { Component } from "react";
// import { ListItem } from 'react-native-elements'
import Eggs from "./Eggs";
import Meat from "./Meat";
import Milk from "./Milk";
import Toast from "./Toast";
import Bacon from "./Bacon";
import Pepper from "./Pepper";
import API from "../utils/API";

console.log(API.getPeople())

class Omelet extends Component {
    state = {
        result: [{
            gender: '',
            name: {
                title: '',
                first: '',
                last: ''
            },
        }],
        search: ""
    };

    componentDidMount() {
        this.getEmployees();
      }
    

    getEmployees = people => {
        API.getPeople(people)
            .then(res => this.setState({ result: res.data.results[0].picture }))
            .catch(err => console.log(err));
    };

    render() {
        return (
                <Milk>
                    <div className="img">
                    <img src={this.state.result.large}></img>
                    </div>
                    <div className="meatTable">
                    <Toast />
                    <Meat />
                    <Pepper />
                    <Bacon />
                    <Eggs />
                    </div>
                </Milk>
            
        )
    }
}

export default Omelet;