import { Component } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Profile extends Component {

    render () {

        return (
            <Container>
                <Row md={4}>
                    <Col><div class="neon-wrapper">
                            <span class="txt" >tofik.eth</span>
                            <span class="gradient"></span>
                            <span class="dodge"></span>
                        </div>
                    </Col>
                    <Col xs={6}>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
                
            </Container>
        )
    }
}

export default Profile;