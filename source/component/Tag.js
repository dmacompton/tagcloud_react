import React, {Component} from 'react';
import {Link} from 'react-router';

let style = {
    display: 'inline-block',
    cursor: 'pointer',
    textDecoration: 'none',
    padding: '4px'
};

export default class Tag extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {label, id, sentimentScore} = this.props.data;
        style.fontSize = 0.3 + sentimentScore / 50 + 'em';
        
        return (
            <Link to={`/${id}`} style={style}>
                {label}
            </Link>
        );
    }
}

