import React, { Component } from 'react';
import { Modal, ModalFooter, ModalHeader, ModalBody, Button } from 'reactstrap';
import axios from 'axios';

class TopicModal extends Component {
    constructor(props) {
        super(props);
        this.submittopic_handler = this.submit_topic.bind(this);
    }


    submit_topic(comment) {
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
            <Modal isOpen={this.props.modal_state} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Add a new topic!</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.submittopic_handler}>Submit</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggle}>Back</Button>
                </ModalFooter>
            </Modal>
            </div>
        );
    }
}

export default TopicModal;