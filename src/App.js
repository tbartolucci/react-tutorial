import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

//class App extends Component {
const app = props => {
    // initial state
    // two methods
    const [ personState, setPersonState ] = useState({
        persons : [
            {name: 'Max', age: 28},
            {name: 'Tom', age: 38},
            {name: 'Lucas', age: 8}
        ]
    });
    const [otherState, setOtherState] = useState('This is something else');

    const switchNameHandler = () => {
        //console.log('Was Clicked');
        // DONT DO THIS: this.state.persons[0].name = "Maximillion";
        setPersonState({ persons : [
                {name: 'Maximillian', age: 28},
                {name: 'Tom', age: 40},
                {name: 'Lucas', age: 8}
            ]});
        setOtherState('Button Clicked');
    };

    return (
        <div className="App">
             <h1>React App</h1>
             <p>{otherState}</p>
             <button onClick={switchNameHandler}>Switch Name</button>

             <Person
                 name={personState.persons[0].name}
                 age={personState.persons[0].age}/>
             <Person
                 name={personState.persons[1].name}
                 age={personState.persons[1].age}
                click={switchNameHandler} />
             <Person
                 name={personState.persons[2].name}
                 age={personState.persons[2].age}/>

         </div>
    );

};

export default app;



