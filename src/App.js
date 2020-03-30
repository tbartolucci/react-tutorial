import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

    // example state
    state = {
        persons : [
            {id: '1', name: 'Max', age: 28},
            {id: '2', name: 'Tom', age: 38},
            {id: '3', name: 'Lucas', age: 8}
        ],
        otherState: 'This is something else',
        username : "Tom",
        showPersons: false
    };

    nameChangeHandler = (event, id) => {
        // Get the index of the p erson
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        // use spread to clone object into a new object to not mutate state
        const person = {
            ...this.state.persons[personIndex]
        };

        //set the name
        person.name = event.target.value;
        // clone the object
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        //set the state
        this.setState({persons: persons})
    };

    deletePersonHandler = (personIndex) => {
        // Slice with no params creates a copy
        //const persons = this.state.persons.slice();
        // ES6 Spread
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
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
                    {this.state.persons.map((person,index) => {
                        return (<Person
                                click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangeHandler(event, person.id) }/>
                            );
                    })}
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
