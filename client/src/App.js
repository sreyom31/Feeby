import React, {useEffect} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import * as actions from './actions'
import Header from "./components/Header";

const Dashboard = () => {
    return (
        <h1>Dashboard</h1>
    )
}

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.fetchUser())
    }, []);


    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    {/*<Route exact path="/" component={} />*/}
                    <Route exact path="/surveys" component={Dashboard} />
                    {/*<Route path="/surveys/new" component={} />*/}
                </div>
            </BrowserRouter>
        </div>
    );
}

export default connect(null, actions)(App);