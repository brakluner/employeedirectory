import React, { Component } from "react";
import Eggs from "./Eggs";
import Milk from "./Milk";
import API from "../utils/API";



class Omelet extends Component {
    state = {
        result: {},
        result1: {},
        result2: {},
        result3: {},
        result4: {},
        result5: {},
        search: ""
    };

    componentDidMount() {
        this.getEmployees();
      }
    

    getEmployees = people => {
        API.getPeople(people)
            .then(res => this.setState({ result: res.data.results[0].picture,
                                         result1: res.data.results[0].location.street,
                                         result2: res.data.results[0].location,
                                         result3: res.data.results[0],
                                         result4: res.data.results[0],
                                         result5: res.data.results[0].name
                                        }))
            .catch(err => console.log(err));
    };

    render() {
        return (
                <Milk>
                    <div className="img">
                    <img src={this.state.result.large} alt=''></img>
                    </div>
                    <div className="meatTable">
                    <Eggs
                    title={this.state.result5.title}
                    first={this.state.result5.first}
                    last={this.state.result5.last}
                    gender={this.state.result3.gender}
                    phone={this.state.result4.phone} cell={this.state.result4.cell}                 
                    number= {this.state.result1.number} 
                    name= {this.state.result1.name}   
                 city= {this.state.result2.city}
                 state= {this.state.result2.state}
                 country= {this.state.result2.country}
                 postcode= {this.state.result2.postcode}
                    ></Eggs>
                    </div>
                </Milk>
            
        )
    }
}

export default Omelet;