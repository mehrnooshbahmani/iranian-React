import React, { Component } from "react"

interface IProps{
    loading:boolean;
}

const Loading = ({loading}:IProps) => {
    return loading ?
    <div className="center"><h1>Loading ...</h1></div>
    : null
}

export default Loading

