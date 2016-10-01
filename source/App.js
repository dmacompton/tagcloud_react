import React, {Component} from 'react';
import Tag from './component/Tag';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: this.props.route.data
        };
    }

    render() { 
        let tags = this.state.tags;
        let tagsComponent = tags.map(item => <Tag key={item.id} data={item}/>);

        return (
            <div>
                <h1>TagCloud</h1>
                {tagsComponent}
            </div>
        );
    }
}