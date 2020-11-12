import React, { Component } from 'react'
import axios from "axios"
export default class Proxy extends Component {

    componentDidMount(){
        // axios.get("https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=4200482",{
        //     headers:{
        //         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1604462547948758275686401","bc":"310100"}',
        //         'X-Host': 'mall.film-ticket.film.list'
        //     }
        // }).then(res=>{
        //     console.log(res)
        // })


        axios.get("/api/db/in_theaters").then(res=>{
            console.log(res)
        })
    }

    render() {
        return (
            <div>
                Proxy
            </div>
        )
    }
}
