import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
// import { Provider as ReduxProvider, useSelector, useDispatch } from 'react-redux';

// components
import Header from './components/layouts/Header'
import Home from './components/Home'
import Error from './components/layouts/Error'


const App = () => {
    const location = useLocation();
    return (
        <>
            <Header />

            <div className='content'>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="*">
                        <Error code='404' title='Not Found' description={<>The requested URL <span className='location-path'>{location.pathname}</span> was not found on this server. That’s all we know.</>} />
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default App


ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)