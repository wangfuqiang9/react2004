import React, { Component } from 'react'
import eventHub from './EventHub'

export default class Two extends Component {
    handleClick = ()=>{
        //触发EventHub方法
        eventHub.trigger("chufaOne",this.randomRgbaColor())
    }

    randomRgbaColor() { //随机生成RGBA颜色
        var r = Math.floor(Math.random() * 256); //随机生成256以内r值
        var g = Math.floor(Math.random() * 256); //随机生成256以内g值
        var b = Math.floor(Math.random() * 256); //随机生成256以内b值
        var alpha = Math.random(); //随机生成1以内a值
        return `rgb(${r},${g},${b},${alpha})`; //返回rgba(r,g,b,a)格式 颜色
       }

    render() {
        return (
            <div>
                Two---<button onClick={this.handleClick}>更改颜色</button>
            </div>
        )
    }
}
