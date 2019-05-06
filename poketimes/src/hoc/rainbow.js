import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colours = ['red', 'pink', 'orange', 'blue', 'green']
    const color = Math.floor(Math.random() * 5)
    console.log(color)
    const randomColour = colours[color]
    const className = randomColour + '-text'

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow