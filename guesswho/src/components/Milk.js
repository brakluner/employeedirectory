import React from "react";


function Milk(props) {
    
  return (<div>{props.children}MILK AND MEAT ARE THE SPICE OF LIFE!
                Name: {props.title} {props.first} {props.last} </div>);
}

export default Milk;