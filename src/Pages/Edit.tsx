import React from "react";
import {Maduale} from "../Components"

const Edit = () => {
    return (
        <>
            <Maduale.Input name="title" type="text" handleInputChange={(e) => e.target.value}/>
            <Maduale.Input name="location" type="text" handleInputChange={(e) => e.target.value}/>
            {/* <Maduale.Button btnName="edit" btnOnClick={}/> */}
        </>
    )
}
export default Edit