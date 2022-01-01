import React from 'react';
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import Payments from "./payments";

function Header(props) {
    console.log(props)
    const renderContent = () => {
        if(props.auth===null) return
        else if(!props.auth) return (
            <li><a href="/auth/google">Login With Google</a></li>
        )
        else return ([<li key={"1"}><Payments /></li>, <li key={"2"}><a href="/api/logout">Logout</a></li>])
    }
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to={props.auth ? '/surveys' : '/'} href="" className="left brand-logo">Feeby</Link>
                <ul id="nav-mobile" className="right">
                    {renderContent()}
                </ul>
            </div>
        </nav>
    );
}

function mapStateToProps({ auth }) {
    return {auth}
}

export default connect(mapStateToProps)(Header);