import React from "react"
import ListItem from "./ListItem"
import {IVisit} from "../Models/VisitData"

interface IProps{
    data : IVisit[];
    handleEditBtn: (item: {}) => any;
    loading: boolean
}

const List = ({data = [],handleEditBtn,loading}:IProps) => {
    // const handleEditBtn = () => {
        
    // }
    const items = data.map( item => <ListItem key={item._id} text={`${item.title} ${item.location}`} editBtn={handleEditBtn(item)}  loading={loading} /> )
    return <ul>{items}</ul>
}
export default List