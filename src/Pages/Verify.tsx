import React, { useState , useEffect } from "react"
import {Maduale} from "../Components"
import {verify} from "../Services/auth"
import { useHistory} from "react-router-dom";

const Verify = () => {

    const [message, setMessage]  = useState(""); 
    const [vCode, setVCode]  = useState(""); 
    const [tel , setTel] = React.useState<null | string>("");
    const history = useHistory();

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const getTel = query.get("tel");
        setTel(getTel);
      }, []);

    const handleInputChange = (e:any) => {
        const valInput = e.target.value;
        setVCode(valInput);
        console.log(valInput);
        if(valInput.match(/[0-9]{6}$/)){
            setMessage("valid");
            return valInput;
        } else{
            setMessage("Invalid")
        }
        
    }

    const handleBtnOnClick = () => {
       verify(vCode,tel).then((res) => 
        history.push("/list")
       ).catch((err) => alert(Response.error))
    }
    return(
        <>
        <Maduale.Label text="Verify Code">
            {<Maduale.Input type="text" name="verifyCode" message = {message} handleInputChange={handleInputChange} ></Maduale.Input>}
        </Maduale.Label>
        
        
        <Maduale.Button btnName="Add PhoneNumber" btnOnClick={handleBtnOnClick} loading={false}></Maduale.Button>
        </>
    )
}

export default Verify