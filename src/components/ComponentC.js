import React from "react";
import { useSelector } from "react-redux";

const ComponentC = () =>{
    const value = useSelector((state)=>state.value);
    return(
        <div>
            <p> value from redux state : {value}</p>
        </div>
    );
}

export default ComponentC;