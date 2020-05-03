import React, { Component } from "react";
import Eggs from "./Eggs";
import Meat from "./Meat";
import Milk from "./Milk";
import API from "../utils/API"

console.log(API.getPeople())

class Omelet extends Component {
    state = {
        result: [],
        search: ""
    };

    componentDidMount() {
        this.getEmployees();
      }
    

    getEmployees = people => {
        API.getPeople(people)
            .then(res => this.setState({ result: res.data.results[0] }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="meatTable">
            <Eggs>
                <Milk>
                    <Meat
                    gender={this.state.result.gender}
                    ></Meat>
                </Milk>
            </Eggs>
            </div>
        )
    }
}

export default Omelet;