import React from "react";


export function Studentdetails(props){
    console.log(props);
    return (
        <React.Fragment>
            <h1>Name: {props.data.name}{props.data.monitor?"(Monitor)":null}</h1>
            <h2>Age: {props.data.age}</h2>
        </React.Fragment>
    );
}