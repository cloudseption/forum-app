import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardLink,
    ListGroupItem, ListGroup, Jumbotron } from 'reactstrap';

import './Topic.css'

import TopicItem from '../TopicItem/TopicItem';

class Topic extends Component {
    constructor(props) {
        super(props);
        let { topicID } = this.props.match.params;
        this.state = {
            topicID: topicID
        }
    }
    
    render() {
        return(
            <div id="topic_list_container">
                <Jumbotron>
                    <h1>{this.state.topicID}</h1>
                </Jumbotron>
                <ListGroup flush>
                    <TopicItem topic={ this.state.topicID } message="Testing" />
                    <TopicItem topic={ this.state.topicID }  message="Testing" />
                    <TopicItem topic={ this.state.topicID }  message="Testing" />
                    <TopicItem topic={ this.state.topicID }  message="Testing" />
                    <TopicItem topic={ this.state.topicID }  message="Testing" />
                    <TopicItem topic={ this.state.topicID }  message="Testing" />
                    <TopicItem topic={ this.state.topicID }  message="Testing" />
                    <TopicItem topic={ this.state.topicID }  message="Testing" />
                </ListGroup>
                <Button href="/">Home</Button>
            </div>
        )
    }
}

export default Topic;