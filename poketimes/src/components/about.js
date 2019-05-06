import React from 'react'
import Rainbow from '../hoc/rainbow'

const About = () => {
    return (
        <div className="container">
         <h4 className="center">About</h4>
         <p>
             lorem ipsum about
         </p>

        </div>
    )
}

export default Rainbow(About)