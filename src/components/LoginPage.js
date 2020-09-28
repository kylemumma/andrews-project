import React from "react";
import fire from "../firebaseConfig.js";
import firebase from "firebase";
import { setToken } from "./../auth.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { Row, Col, Button } from "react-bootstrap";
import "./../css/loginPage.css";

const provider = new firebase.auth.GoogleAuthProvider();

async function onLogIn() {
  try {
    const result = await fire.auth().signInWithPopup(provider);
    // This gives you a Google Access Token. You can use it to access the Google API.
    let token = await result.credential.idToken;

    setToken(token);
  } catch (error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
    console.error(errorCode, errorMessage, email, credential);
  }
}

function LoginPage(props) {  
  return (
    <div id="login-form">
      <Jumbotron fluid>
        <Container>
          <Row>
            <Col className="text-center">
              <img
                src="http://www.pmfb.org/wp-content/uploads/2017/11/foob-bank-logo.png"
                alt="Food Bank Logo"
                height="100px"
                className="mt-1 ml-3"
              />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Row className="justify-content-center mt-4">
        <Col className="text-center">
          <Button onClick={onLogIn} variant="light">
            <img
              width="20px"
              style={{ marginBottom: "3px", marginRight: "5px" }}
              alt="Google sign-in"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            ></img>
            Sign In with Google
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default LoginPage;
