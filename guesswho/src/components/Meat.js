import React, { Component } from "react";
import API from "../utils/API"




class Meat extends Component {
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
            .then(res => this.setState({ result: res.data.results[0] }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>Gender: {this.state.result.gender}</div>
        );
        };
    }
export default Meat;