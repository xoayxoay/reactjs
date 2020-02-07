import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import NewProject from './NewProject'
import ProjectsList from './ProjectsList'
import SingleProject from './SingleProject'
import Login from './Login'

import Adwords from './adwords.html'

import '../../sass/main_styles.scss'


class App extends Component {
	componentDidMount() {
		// let script = document.createElement("script");
  //   	script.src = "/plugins/quilljs-1.3.6/quill.min.js";
  //   	script.async = true;

  //   	document.body.appendChild(script);

  //   	script = document.createElement("script");
  //   	script.src = "js/manta.js";
  //   	script.async = true;

  //   	document.body.appendChild(script);
  	}

	render () {
		let login = localStorage.getItem('jwt');
        if (login) {
            console.log('here');
            return (
            	<BrowserRouter>
                    <div>
                        <Header />
                    </div>
				</BrowserRouter>
            )
        }
        return (
			<BrowserRouter>
				<div>
					<Header />
					<Switch>
						<Route exact path='/' component={ProjectsList} />
						<Route path='/create' component={NewProject} />
						<Route path='/login' component={Login} />
						<Route path='/:id' component={SingleProject} />
					</Switch>
				</div>
				
			</BrowserRouter>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))