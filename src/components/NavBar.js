import React from 'react'

const NavBar = () => (
    <header className="navBar">
        <figure className="header-fig">
            <img className="logo-img" alt="Pokémon API" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"></img>
        </figure>
        <ul className="header-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Pokémon</a></li>
            <li><input type="text"/></li>
        </ul>
    </header>
)

export default NavBar