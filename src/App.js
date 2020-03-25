import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    // initial state
    // two methods
    state = {
        persons : [
            {name: 'Max', age: 28},
            {name: 'Tom', age: 38},
            {name: 'Lucas', age: 8}
        ],
        otherState: 'This is something else'
    };

    switchNameHandler = (newName) => {
        // DONT DO THIS: this.state.persons[0].name = "Maximillion";
        this.setState({ persons : [
                {name: newName, age: 28},
                {name: 'Tom', age: 40},
                {name: 'Lucas', age: 8}
            ]});
    };

    nameChangedHandler = (event) => {
        // DONT DO THIS: this.state.persons[0].name = "Maximillion";
        this.setState({ persons : [
                {name: event.target.value, age: 28},
                {name: 'Tom', age: 40},
                {name: 'Lucas', age: 8}
            ]});
    };

    render() {
        return (
            <div className="App">
                <h1>React App</h1>
                <p>{this.state.otherState}</p>
                <button onClick={this.switchNameHandler.bind(this,'Leo')}>Switch Name</button>

                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    change={this.nameChangedHandler}/>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>

            </div>
        );
    }

}

export default App;



