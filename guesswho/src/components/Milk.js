import React from "react";


function Milk(props) {
    
  return (<div>
                Name: {props.title} {props.first} {props.last} {props.children}</div>);
}

export default Milk;