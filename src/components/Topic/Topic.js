import React, { Component } from 'react';
import { ListGroup, Jumbotron, Button } from 'reactstrap';
import axios from 'axios';

import './Topic.css'

import TopicItem from '../TopicItem/TopicItem';
import TopicModal from '../TopicModal/TopicModal';

class Topic extends Component {
    constructor(props) {
        super(props);
        let { topicID } = this.props.match.params;
        this.state = {
            topicID: topicID,
            modal: false
        }
        this.toggle_handler = this.toggle.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount");
        axios.get('https://gb5a5iyanj.execute-api.us-west-2.amazonaws.com/dev/topic', {
            
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    
    render() {
        return(
            <div id="topic_list_container">
                <Jumbotron>
                    <h1>{this.state.topicID}</h1>
                </Jumbotron>
                <TopicModal modal_state={this.state.modal} toggle={this.toggle_handler}/>
                <ListGroup flush>
                    <TopicItem topic={ this.state.topicID }  message="Testing" />
                    <TopicItem topic={ this.state.topicID }  message="Testing" />
                    <TopicItem topic={ this.state.topicID }  message="Testing" />
                    <TopicItem topic={ this.state.topicID }  message="Testing" />
                    <TopicItem topic={ this.state.topicID }  message="Testing" />
                    <TopicItem topic={ this.state.topicID }  message="Testing" />
                    <TopicItem topic={ this.state.topicID }  message="Testing" />
                    <TopicItem topic={ this.state.topicID }  message="Testing" />
                </ListGroup>
                <Button href="/">Home</Button>
                <Button onClick={this.toggle_handler}>Add</Button>
            </div>
        )
    }
}

export default Topic;