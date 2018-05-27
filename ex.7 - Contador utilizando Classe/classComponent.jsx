import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state = { valorAtual: props.initialValue }
    }

    sum(incremento) {
        this.setState({ valorAtual: this.state.valorAtual + incremento })
    }

    render()
    {
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.valorAtual}</h2>
                <button onClick={() => this.sum(-1)}>Dec</button>
                <button onClick={() => this.sum(1)}>Inc</button>
            </div>
        )
    }
}