import React, { Component } from 'react';
import { Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardLink, CardGroup } from 'reactstrap';
import './Landing.css'

class Landing extends Component {
    render() {
        return (
            <div id="landing_container">
            <CardGroup>
                <Card>
                    <CardBody body outline color="secondary">
                        <CardTitle>Javascript</CardTitle>
                        <CardText>Talk about Javascript!</CardText>
                        <Button href="/topic/javascript">Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody body outline color="secondary">
                        <CardTitle>Python</CardTitle>
                        <CardText>Talk about Python!</CardText>
                        <Button href="/topic/python">Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody body outline color="secondary">
                        <CardTitle>PHP</CardTitle>
                        <CardText>Talk about PHP!</CardText>
                        <Button href="/topic/php">Button</Button>
                    </CardBody>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <CardBody body outline color="secondary">
                        <CardTitle>NodeJS</CardTitle>
                        <CardText>Talk about NodeJS!</CardText>
                        <Button href="/topic/nodejs">Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody body outline color="secondary">
                        <CardTitle>Django</CardTitle>
                        <CardText>Talk about Django!</CardText>
                        <Button href="/topic/django">Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody body outline color="secondary">
                        <CardTitle>Laravel</CardTitle>
                        <CardText>Talk about Laravel!</CardText>
                        <Button href="/topic/laravel">Button</Button>
                    </CardBody>
                </Card>
            </CardGroup>
            </div>
        )
    }
}

export default Landing;