import React from "react";
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'
const ComponentA = ()=>{
    return(
        <div>
            <ComponentB></ComponentB>
            <ComponentC></ComponentC>
        </div>
    );
};
export default ComponentA;