import React from "react"
import MessageAlert from "./MessageAlert"

interface IProps{
    type: string;
    name: string;
    message? : string;
    handleInputChange: (e:any) => any;
    
}
const Input = ({type,name,message='',handleInputChange}:IProps) => {
    return (
    <>
    <input type={type} name={name} onChange={handleInputChange}></input>
    { message && <MessageAlert message={message} />}
    </>
    )
}
export default Input