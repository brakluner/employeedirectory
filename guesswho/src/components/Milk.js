import React, { Component } from "react";
import API from "../utils/API";


class Milk extends Component {
    state = {
        result: {},
        search:""
    };

    searchPeople= people => {
    API.search(people)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
    };

    render(){
        
  return (<p gender={this.state.result}>MILK AND MEAT ARE THE SPICE OF LIFE!</p>
            );
}
}
export default Milk;