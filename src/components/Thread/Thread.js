import React, { Component } from 'react';
import './Thread.css'
import { Input, Button, FormGroup } from 'reactstrap';

import ThreadItem from '../ThreadItem/ThreadItem';

class Thread extends Component {
    constructor(props) {
        super(props);
        let { topicID } = this.props.match.params;
        let { threadID } = this.props.match.params;
        this.state = {
            topicID: topicID,
            threadID: threadID
        }
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
                    <Button id="submit_button">Submit</Button>
                    <Button id="back_button" href={`/topic/${this.state.topicID}`}>Back</Button>
                </div>
            </div>
        );
    }
}

export default Thread;