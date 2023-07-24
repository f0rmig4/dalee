import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">Sobre</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/cases">Cases</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/contact">Contato</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href className="button fit">Log In</a></li>
            </ul>
        </div>
        <button className="close" onClick={props.onToggleMenu}>Close</button>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
