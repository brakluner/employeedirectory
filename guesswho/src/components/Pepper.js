import React, { Component } from "react";
import API from "../utils/API"




class Pepper extends Component {
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
            .then(res => this.setState({ result: res.data.results[0] }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>Phone:&nbsp;{this.state.result.phone}&nbsp;Cell:&nbsp;{this.state.result.cell}
                 </div>
        );
        };
    }
export default Pepper;