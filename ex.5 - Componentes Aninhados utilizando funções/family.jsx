import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
    <div>
        <h1>Família</h1>
        { props.children }

        {/* Não funciona pois o cloneElement nao funciona para vários elementos, somente um */}
        {/* { React.cloneElement(props.children, {...props}) } */} 
        
        {/* Utilizando diretamente o map no corpo do método */}
        { React.Children.map(props.children,
            filho => React.cloneElement(filho, {...props})) }

        {/* Mesmo efeito da linha acima, porém aqui chamando outro método */}
        Filhos: <br />  { childrenWithProps(props.children, props) }
    </div>
)