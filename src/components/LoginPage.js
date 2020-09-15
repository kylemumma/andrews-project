import React from "react";
import fire from "../firebaseConfig.js";
import firebase from "firebase";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      token: "",
      user: {},
    };

    this.provider = new firebase.auth.GoogleAuthProvider();

    this.onLogIn = this.onLogIn.bind(this);
  }

  async onLogIn() {
    try {
      const result = await fire.auth().signInWithPopup(this.provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = await result.credential.accessToken;
      // The signed-in user info.
      let user = await result.user;

      this.setState({
        loggedIn: true,
        token,
        user,
      });
    } catch (error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      // ...
      console.log(errorCode);
      console.log(errorMessage);
      console.log(email);
      console.log(credential);
    }
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <div id="login-form">
          <button onClick={this.onLogIn}>Sign In with Google</button>
        </div>
      );
    }

    // Logged In
    return <h1>Welcome {this.state.user.displayName}</h1>;
  }
}

export default LoginPage;
