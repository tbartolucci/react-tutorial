import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

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
        showPersons: false,
        textLength: 0,
        textLengthString: ''
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

    textLengthHandler = (event) => {
        this.setState( {textLength : event.target.value.length});
        this.setState( { textLengthString: event.target.value});
    };

    charClickHandler = (index) => {
        const text = this.state.textLengthString.split('');
        text.splice(index,1);
        const updatedText = text.join('');
        this.setState({textLengthString: updatedText, textLength: updatedText.length});
    };

    render() {
        // in-line style
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {  // Radium lets you do this
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        const charList = this.state.textLengthString.split('').map((ch,index) => {
            return (<CharComponent
                    key={index}
                    click={() => this.charClickHandler(index)}
                    text={ch} />);
        });

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

            style.backgroundColor = 'red';
            style[':hover'] = {  // Radium feature
                backgroundColor: 'salmon',
                color: 'black'
            }
        }

        const classes = [];
        if ( this.state.persons.length <= 2 ){
            classes.push('red'); // classes = ['red']
        }
        if ( this.state.persons.length <= 1 ){
            classes.push('bold'); // classes = ['red', 'bold']
        }

        return (
            <div className="App">
                <h1>React App</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <h2>Assignment</h2>
                <p><input
                    type="text"
                    onChange={this.textLengthHandler}
                    value={this.state.textLengthString}
                    placeholder="How long is this?"
                />
                </p>
                <p>Count: {this.state.textLength}</p>
                <ValidationComponent
                    length={this.state.textLength}
                />

                {charList}

                <h2>Lists and Handlers</h2>
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
