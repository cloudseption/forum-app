import React, { Component } from 'react';
import './Thread.css'
import { Input, Button, FormGroup } from 'reactstrap';
import axios from 'axios';

import ThreadItem from '../ThreadItem/ThreadItem';

class Thread extends Component {
    constructor(props) {
        super(props);
        let { topicID } = this.props.match.params;
        let { threadID } = this.props.match.params;
        this.state = {
            topicID: topicID,
            threadID: threadID,
            comments: []
        }

        this.submit_comment_handler = this.submit_comment.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount");
        axios.get('https://gb5a5iyanj.execute-api.us-west-2.amazonaws.com/dev/comment', {
            
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    submit_comment(comment) {
        axios.post('https://gb5a5iyanj.execute-api.us-west-2.amazonaws.com/dev/comment', {
            comment: comment
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {
        return(
            <div id="thread_item_container">
                <ThreadItem />
                <ThreadItem />
                <ThreadItem />
                <ThreadItem />
                <ThreadItem />
                <ThreadItem />
                <div id="form_group">
                    <Input type="textarea" name="text" id="add_comment" />
                    <Button id="submit_button" onClick={this.submit_comment_handler}>Submit</Button>
                    <Button id="back_button" href={`/topic/${this.state.topicID}`}>Back</Button>
                </div>
            </div>
        );
    }
}

export default Thread;