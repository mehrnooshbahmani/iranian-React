import React from "react"


interface IProps{
    message : string;
}

const MessageAlert = ({message}:IProps) => {
    return <p>{message}</p>
} 
export default MessageAlert