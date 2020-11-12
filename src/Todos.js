import React, { Component } from 'react'
import List from "./List"
import Input from "./Input"
export default class Todos extends Component {
    constructor(){
        super()
        this.state={
          list:[
            {id:1,title:"组件状态"},
            {id:2,title:"组件状态2"}
          ]
        }
      }

      add =title=>{
          this.setState({
              list:[...this.state.list,{id:parseInt(Math.random()*100),title}]
          })
      }

    render() {
        return (
            <div>
               <List list={this.state.list}/>
               <Input add={this.add}/>
            </div>
        )
    }
}
