import React, { Component } from "react";
import API from "../utils/API"




class Eggs extends Component {
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
            .then(res => this.setState({ result: res.data.results[0].location }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                 City: {this.state.result.city}<br></br>
                 State: {this.state.result.state}<br></br>
                 Country: {this.state.result.country}<br></br>
                 Postcode: {this.state.result.postcode}</div>
        );
        };
    }
export default Eggs;
