import React, { Component } from 'react'
import One from "./One"
import Two from "./Two"
export default class Borther extends Component {
    render() {
        return (
            <div>
                <One/>
                <Two/>
            </div>
        )
    }
}
