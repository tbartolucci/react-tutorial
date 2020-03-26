import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

    // example state
    state = {
        persons : [
            {name: 'Max', age: 28},
            {name: 'Tom', age: 38},
            {name: 'Lucas', age: 8}
        ],
        otherState: 'This is something else',
        username : "Tom",
        showPersons: false
    };

    // On change event handler example for updating object
    nameChangedHandler = (event) => {
        // DONT DO THIS: this.state.persons[0].name = "Maximillion";
        this.setState({ persons : [
                {name: event.target.value, age: 28},
                {name: 'Tom', age: 40},
                {name: 'Lucas', age: 8}
            ]});
    };

    // input event handler for updating simple value in state
    usernameChangedHandler = (event) => {
        this.setState({ username : event.target.value });
    };

    // button event handler example for simple toggle
    togglePersonHandler = () => {
        this.setState({ showPersons : !this.state.showPersons });
    };

    render() {
        // in-line style
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px'
        };

        let persons = null;
        if ( this.state.showPersons ) {
            persons = (
                <div>
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

        return (
            <div className="App">
                <h1>React App</h1>
                <p>{this.state.otherState}</p>
                <button
                    style={style}
                    onClick={this.togglePersonHandler}>
                    Toggle People
                </button>

                { persons }

                <UserInput username={this.state.username} changed={this.usernameChangedHandler}/>
                <UserOutput username={this.state.username}/>
                <UserOutput username={this.state.username}/>

            </div>
        );
    }

}

export default App;
