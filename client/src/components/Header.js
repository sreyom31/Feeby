import React from 'react';
import {connect} from 'react-redux'

function Header(props) {
    console.log(props)
    const renderContent = () => {
        if(props.auth===null) return
        else if(!props.auth) return (
            <li><a href="/auth/google">Login With Google</a></li>
        )
        else return (<li><a href="/api/logout">Logout</a></li>)
    }
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="" className="left brand-logo">Feeby</a>
                <ul id="nav-mobile" className="right">
                    <li>{renderContent()}</li>
                </ul>
            </div>
        </nav>
    );
}

function mapStateToProps({ auth }) {
    return {auth}
}

export default connect(mapStateToProps)(Header);