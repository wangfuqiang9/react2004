import React, { Component } from 'react'

export default class From extends Component {
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            value:"hello"
        }
    }

    handleClick = ()=>{
        console.log(this)
    }
    handleChange = e=>{
        this.setState({
            value:e.target.value
        })
    }

    render() {
        return (
            <div>
                <label htmlFor="username">你好</label>
                <input onChange={this.handleChange} value={this.state.value}/>
                <input defaultValue="hello hhhh"/>
                <input type="checkbox" defaultChecked/>
                <button onClick={this.handleClick}>提交</button>  {/*.bind(this) 也可以实现*/}
            </div>
        )
    }
}
