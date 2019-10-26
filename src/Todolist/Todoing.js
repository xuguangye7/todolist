import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Todoing extends Component {
    render(){
        return(        
            <ul>
                <h3>正在进行的事情~~~{this.props.b}</h3>
                {
                    // 在map内部用到this要注意指向，所以使用箭头函数
                    this.props.todo.map((value, key) => {
                        if(!value.checked){
                            return(
                                <li style={{marginLeft:30}} key={key}>
                                    <input type="checkbox" checked={value.checked} onChange={()=>this.props.a(key)}/>
                                    {value.todo}
                                    <button style={{marginLeft:5}} onClick={()=>{this.props.delTodo(key)}}>删除</button>
                                </li>
                            )
                        }
                        return ''
                    })
                }
            </ul>
        )
    }
}