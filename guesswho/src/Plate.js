import React, { Component } from "react";
import Omelet from "./components/Omelet";


class Plate extends Component {
    render() {
        return ( <div>{this.props.children}</div>
            
        );
    }
}

export default Plate;