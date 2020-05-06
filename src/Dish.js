import React, { Component } from "react";
import Omelet from "./components/Omelet";
import Plate from "./Plate";


class Dish extends Component {
    render() {
        return ( <Plate>
            <Omelet />
        </Plate>
            
        );
    }
}

export default Dish;