import React, { Component } from 'react'

export default class Input extends Component {

    keyUp = e=>{
        if(e.keyCode === 13){
            //需要添加
            this.props.add(e.target.value)
            e.target.value = ""
        }
    }

    render() {
        return (
            <input placeholder="请输入内容" onKeyUp={this.keyUp}/>
        )
    }
}
