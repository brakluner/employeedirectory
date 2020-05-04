import React, { Component } from "react";
import API from "../utils/API"




class Toast extends Component {
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
            },
            picture: {
                large: '',
                medium: '',
                thumbnail:''
            }
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
            <div>Name:{this.state.result.title}&nbsp;
                 {this.state.result.first}&nbsp;
                 {this.state.result.last}</div>
        );
        };
    }
export default Toast;