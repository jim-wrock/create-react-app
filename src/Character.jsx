import React {Component} from 'react';

class Character extends Component {
    render() {
        return (
            <div>
        <h1>hello {this.propos.name}</h1>
        <h2>du film {this.props.film}</h2>
        </div>
        );
    }
}

export default Character;