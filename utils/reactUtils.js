import React from 'react'

function childrenWithProps(children, props){
    return React.Children.map(props.children, 
        myChild => React.cloneElement(myChild, {...props}))
}

export { childrenWithProps }