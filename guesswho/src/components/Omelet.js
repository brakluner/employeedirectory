import React, { Component } from "react";
// import { ListItem } from 'react-native-elements'
import Eggs from "./Eggs";
import Meat from "./Meat";
import Milk from "./Milk";
import API from "../utils/API"

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
            .then(res => this.setState({ result: res.data.results[0].name }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="meatTable">
            <Eggs>
                <Milk
                title={this.state.result.title}
                first={this.state.result.first}
                last={this.state.result.last}
                    // .map((l, i) => (
                //       <div
                //         key={i}
                //         title={l.title}
                //         first={l.first}
                //         last={l.last}
                //       />
                //     ))
                //   }
                >
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