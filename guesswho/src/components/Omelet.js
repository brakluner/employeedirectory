import React, { Component } from "react";
import Eggs from "./Eggs";
import Meat from "./Meat";
import Milk from "./Milk";
import API from "../utils/API"

class Omelet extends Component {
    state = {
        result: {},
        search: ""
    };

    getPeople = people => {
        API.search(people)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="meatTable">
            <Eggs>
                <Milk>
                    <Meat></Meat>
                </Milk>
            </Eggs>
            </div>
        )
    }
}

export default Omelet;