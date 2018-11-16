import React, { Component } from 'react';
import { Media } from 'reactstrap';
import './ThreadItem.css'

class ThreadItem extends Component {
    render() {
        return (
            <Media outline color="secondary">
            <Media left href="/">
                <h3>Username</h3>
            </Media>
            <Media body>
                <Media heading>
                Media heading
                </Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media>
        </Media>
        );
    }
}

export default ThreadItem;