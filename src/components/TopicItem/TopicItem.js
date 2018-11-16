import React, { Component } from 'react';
import { ListGroupItem } from 'reactstrap';

import './TopicItem.css'

class TopicItem extends Component {
    render() {
        return(
            <ListGroupItem tag="a" href={`/topic/javascript/thread/test`}>{this.props.message}</ListGroupItem>
        );
    }
}

export default TopicItem;
