import React from 'react'
import './Header.css'

import {
    Link
} from 'react-router-dom'

const Header = () => {
    return (
        <div className="header col">
            <div className="row">
                <Link className="logo" to="/">Sleep Retreat</Link>
            </div>
        </div>
    )
}

export default Header
