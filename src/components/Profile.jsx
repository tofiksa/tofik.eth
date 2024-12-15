import { Component } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

/**
  * Implement your connectWallet method here
  */
 const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      //setCurrentAccount(accounts[0]); 
    } catch (error) {
      console.log(error)
    }
  }

class Profile extends Component {

    

    render () {
        return (
            <>
                <button type="button" onClick={connectWallet}>Connect Wallet</button>
                <Container>
                    <Row md={4}>
                        <Col><div className="neon-wrapper">
                                <span className="txt" >tofik.eth</span>
                                <span className="gradient" />
                                <span className="dodge" />
                            </div>
                        </Col>
                        <Col xs={6}>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>                
                </Container>
            </>
        )
    }
}

export default Profile;