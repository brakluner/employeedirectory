import React from "react";





function Eggs(props) {

        return (
        <div>
            <div>
                 Name:{props.title}&nbsp;
                 {props.first}&nbsp;
                 {props.last}
            </div>
            <div>       
            Gender: {props.gender}
            </div>
            <div>
                Phone:&nbsp;{props.phone}&nbsp;Cell:&nbsp;{props.cell}
            </div>
            <div>
                Street: {props.number} {props.name}
            </div>
            <div>
                 City: {props.city}<br></br>
                 State: {props.state}<br></br>
                 Country: {props.country}<br></br>
                 Postcode: {props.postcode}
            </div>
        </div>
        );
        };
    
export default Eggs;
