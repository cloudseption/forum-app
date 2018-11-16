import React, { Component } from 'react';
import './Thread.css'
import { Input, Button, FormGroup } from 'reactstrap';

import ThreadItem from '../ThreadItem/ThreadItem';

class Thread extends Component {
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
                </div>
            </div>
        );
    }
}

export default Thread;