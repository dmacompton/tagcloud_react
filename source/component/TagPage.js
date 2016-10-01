import React, {Component} from 'react';
import {Link} from 'react-router';
import {capitalise} from '../helper';
import _ from 'lodash';

export default class TagPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let tags = this.props.route.data;
        let id = this.props.params.tag;

        let tag = _.find(tags, function (tag) {
            return tag.id === id;
        });

        let mentions = [];
        let mentionsTotal = 0;

        for (let mention in tag.sentiment) {
            mentions.push(
                <p key={mention}>
                    <strong>{capitalise(mention)} Mentions:</strong> <span>{tag.sentiment[mention]}</span>
                </p>
            );
            mentionsTotal += tag.sentiment[mention];
        }

        let pageTypes = [];

        for (let pageType in tag.pageType) {
            pageTypes.push(
                <p key={pageType}>
                    <strong>{capitalise(pageType)}:</strong> <span>{tag.pageType[pageType]}</span>
                </p>
            );
        }

        return (
            <div>
                <Link to='/'>&lt;- return</Link>
                <h2>Tag: {tag.label}</h2>
                <hr/>
                <p><strong>Total Mentions:</strong> <span>{mentionsTotal}</span></p>
                {mentions}
                <hr/>
                {pageTypes}
            </div>
        );
    }
}