import React from "react";
import { useDispatch } from "react-redux";
const ComponentB = () =>{
    const dispatch = useDispatch();

    const handleChnage = (e) => {
        dispatch({
            type:'set_value' , payload : e.target.value
        })
    }
    return(
        <div>
            <input type="text" onChange={handleChnage} />
        </div>
    );
}

export default ComponentB;