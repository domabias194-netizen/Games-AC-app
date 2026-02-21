import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <h1>Welcome to the Games AC App</h1>
                </Route>
                {/* Add more Routes here as needed */}
            </Switch>
        </Router>
    );
};

export default App;
