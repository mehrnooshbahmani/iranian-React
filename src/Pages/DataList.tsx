import React, { useEffect, useState } from "react"
import {Maduale} from "../Components"
import {allList} from "../Services/List"
import {IVisit} from "../Models/VisitData"

const Data = [
    { _id: "1", title: "t1", location: "l1" },
    { _id: "2", title: "t2", location: "l2" },
    { _id: "3", title: "t3", location: "l3" },
    { _id: "4", title: "t4", location: "l4" },
    { _id: "5", title: "t5", location: "l5" },
  ]: Ivisit[];

const DataList = () => {
    const [list , setList] = useState<IVisit[]>([]);
    useEffect(() => {
        allList().then((res) => {
            setList(res.data.data );
        })
    } , []);
    return (
        <Maduale.List data={list}  loading={false}/>
    )
}

export default DataList