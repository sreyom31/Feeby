import React from 'react';

function Header(props) {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="" className="left brand-logo">Feeby</a>
                <ul id="nav-mobile" className="right">
                    <li><a href="">Login With Google</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;