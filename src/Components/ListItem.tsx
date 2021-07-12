import React from "react"
import Button from "./Button"
interface IProps{
    text : any;
    editBtn: () => any;
    loading: boolean
}

const ListItem : React.FC<IProps> = ({text,editBtn,loading} : IProps) => {

    return <li>
        <div>
            {text}
            <Button btnName="edit" btnOnClick={editBtn} loading={false}/>
        </div>
        
    
    </li>
}

export default ListItem