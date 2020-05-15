import React, {Component} from 'react';
import Person from "./Person/Person";

class PersonList extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('[PersonList.js] getDerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[PersonList.js] shouldComponentUpdate');
        console.log('[PersonList.js] Compare nextState to existing state');
        return nextProps.persons !== this.props.persons;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[PersonList.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[PersonList.js] componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}
            />
        });
    }
}

export default PersonList;