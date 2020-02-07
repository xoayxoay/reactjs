import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Link, Redirect} from 'react-router-dom';
import RouterPath from '../routes/RouterPath';

export default class Example extends Component {
    render() {
        let login = localStorage.getItem('jwt');
        if (!login) {
            console.log('here');
            return (
                <HashRouter>
                    <div>
                        <Redirect to='login'/>
                        <RouterPath/>
                    </div>
                </HashRouter>
            )
        }
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/topic'}>Topic</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>About</Link>
                        </li>
                    </ul>
                    <RouterPath/>
                </div>
            </HashRouter>
        )
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(
        <Example/>,
        document.getElementById('example'));
}