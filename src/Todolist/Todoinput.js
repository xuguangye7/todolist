import React, { Component } from 'react'

export default class Todoinput extends Component {
    render(){
        return(
            <div className="row1">
                <input style={{marginLeft:30}} ref="title" onKeyUp={this.props.addTodo.bind(this)}/>
            </div>
        )
    }
}