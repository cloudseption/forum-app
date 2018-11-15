import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardLink,
    ListGroupItem, ListGroup, Jumbotron } from 'reactstrap';

import './Topic.css'

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
                    <ListGroupItem tag="a" href="#">Cras justo odio</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Cras justo odio</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Cras justo odio</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>

                </ListGroup>
            </div>
        )
    }
}

export default Topic;