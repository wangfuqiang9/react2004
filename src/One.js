import React, { Component } from 'react'
import EventHub from "./EventHub"
export default class One extends Component {
    state = {
        color:"red"
    }

    componentDidMount(){
        //需要绑定一个方法 等待触发
        EventHub.on("chufaOne",color=>{
            this.setState({
                color:"orange"
            })
        })
    }

    render() {
        return (
            <div style={{color:this.state.color}}>
                One
            </div>
        )
    }
}
