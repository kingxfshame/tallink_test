import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Nav from './Nav';
import Payment from './Payment';
import { BrowserRouter as Router, Switch , Route} from 'react-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
        <Route path="/" exact component={Payment}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
