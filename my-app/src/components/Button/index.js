import React, { Component } from 'react';
import './style.scss'

export default class Button extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <button className="btn green"> {this.props.label} </button>
            </>
        )
    }
}