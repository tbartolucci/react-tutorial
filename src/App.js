import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

    state = {
        persons : [
            {name: 'Max', age: 28},
            {name: 'Tom', age: 38},
            {name: 'Lucas', age: 8}
        ],
        otherState: 'This is something else',
        username : "Tom"
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

    usernameChangedHandler = (event) => {
        this.setState({ username : event.target.value });
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px'
        };

        return (
            <div className="App">
                <h1>React App</h1>
                <p>{this.state.otherState}</p>
                <button
                    style={style}
                    onClick={this.switchNameHandler.bind(this,'Leo')}>
                    Switch Name
                </button>

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

                    <UserInput username={this.state.username} changed={this.usernameChangedHandler}/>
                    <UserOutput username={this.state.username}/>
                    <UserOutput username={this.state.username}/>

            </div>
        );
    }

}

export default App;



