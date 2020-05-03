import React, { Component } from "react";
import API from "../utils/API"




class Bacon extends Component {
    state = {
        result: [{
            gender: '',
            name: {
                title: '',
                first: '',
                last: ''
            },
            location: {
                street: '',
                city: '',
                state:'',
                country:'',
                postcode:'',
            }
        }],
        search: ""
    };

    componentDidMount() {
        this.getEmployees();
      }
    

    getEmployees = people => {
        API.getPeople(people)
            .then(res => this.setState({ result: res.data.results[0].location.street }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>Street: {this.state.result.number} {this.state.result.name}
                 </div>
        );
        };
    }
export default Bacon;