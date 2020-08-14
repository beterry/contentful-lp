import React from 'react'
import Navigation from '../components/navigation'

export default ({children}) => (
    <div>
        <Navigation />
        {children}
    </div>
)