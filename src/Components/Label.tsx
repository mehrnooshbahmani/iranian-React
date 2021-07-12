
import React, {ReactElement} from "react"

interface IProps{
    text: string;
    children : ReactElement;
}

const Label = ({text,children}:IProps) => {
    return(
    <div>
        <label>{text}</label>
        {children}
    </div>
    )
}
export default Label