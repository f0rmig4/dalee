import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><strong>dalee</strong> <span>.dev</span></Link>
        <nav>
            <button className="menu-link" onClick={props.onToggleMenu}>Menu</button>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
