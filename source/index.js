import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import TagPage from './component/TagPage';
import data from './data';
 
let routes = (
    <Router history={browserHistory}>
        <Route path='/' data={data} component={App}>
            <IndexRoute data={data} component={App}/>
        </Route>
        <Route path='/:tag' data={data} component={TagPage}/>
    </Router>
);

ReactDOM.render(routes, document.getElementById('app'));