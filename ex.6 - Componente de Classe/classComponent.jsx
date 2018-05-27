import React, { Component } from 'react'

export default class ClassComponent extends Component {
    // Componente de classe precisam obrigatoriamente implementes retornar através do método Render
    render()
    {
        return ( <h1>{this.props.value ? this.props.value : 'Vazio'}</h1> )
    }
}