import React, { Component } from 'react';

import {Route,Control } from 'react-keeper';

const Home = () => <div><h1>Home</h1></div>;
const About = () => <div><h1>About</h1></div>;
const Contact = () => <div><h1>Contact</h1></div>;

class App extends Component {
  render() {
    return (
  		    <div className="App">
            		<Route cache miss path='/home' component={Home} />
                    <Route path="/weekamp" component={About} />				
                    <Route path="/readers" component={Contact} />				
            </div>
    );
  }
}

export default App;

