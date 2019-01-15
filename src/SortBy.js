import React, { Component } from 'react';

class SortBy extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return <div>{ this.props.render() } </div>

    }
}

export default SortBy;