import React, { Component } from 'react'
import axios from "axios"
export default class TodoList extends Component {
    state = {
        list:[], //定义一个list标签
        username:"",
        age:0

    }

    componentDidMount(){
        //可以用来进行异步请求
      this.getData()
    }

    getData = ()=>{
        axios.get("http://localhost:5000/list").then(res=>{
            this.setState({
               list:res.data
            })
        })
    }


    handleChange = e=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    //添加操作
    add =()=>{
        axios.post("http://localhost:5000/list",{
            username:this.state.username,
            age:this.state.age
        }).then(res=>{
          this.getData()
          //请求输入值
          this.setState({username:"",age:0})
        })
    }

    //删除操作
    delete = id=>{
        axios.delete("http://localhost:5000/list/"+id).then(res=>{
            this.getData()
        })
    }

    //修改操作
    update = ({username,age,id})=>{

        //弹出
        let value = prompt("请修改...",username+","+age)
        let arr = value.split(",")

        axios.patch("http://localhost:5000/list/"+id,{
            username:arr[0],
            age:arr[1]
        }).then(res=>{
            this.getData()
        })
    }

    //查询操作
    serch =()=>{
        let keyWord  = prompt("输入查询内容")
        axios.get("http://localhost:5000/list?username_like="+keyWord).then(res=>{
            // console.log(res.data)
            this.setState({
                list:res.data
            })
        })
    }

    render() {
        let {username,age,list} = this.state 
        return (
            <div>
                <input id="username" type="text" value={username} onChange={this.handleChange} placeholder="请输入用户名..."/>
                <input id="age" type="number" value={age} onChange={this.handleChange} placeholder="请输入年龄..."/>
                <button onClick={this.add}>添加</button>
                <button onClick={this.serch}>查询</button>
                <button onClick={()=>{this.getData()}}>返回</button>
               <ul>
                   {
                       list.map((item)=>{
                       return <li key={item.id}>
                           {item.username}--{item.age}
                            <button onClick={this.delete.bind(this,item.id)}>删除</button>
                            <button onClick={this.update.bind(this,item)}>修改</button>
                       </li>
                       })
                   }
               </ul>
            </div>
        )
    }
}
