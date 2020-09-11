import React from "react";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            username: "",
            password: ""
        };

        this.provider = new firebase.auth.GoogleAuthProvider();

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLogIn = this.onLogIn.bind(this);
    }

    onUsernameChange(event) {
        this.setState({
            username: event.target.value
        });
    }

    onPasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    onLogIn() {
        console.log(this.state.username);
        console.log(this.state.password);

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = result.credential.accessToken;
            // The signed-in user info.
            let user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            // ...
          });
    }

    render() {
        return (
            <div id="login-form">
                <input type="text" id="username" placeholder="username" onChange={this.onUsernameChange} value={this.state.username}></input>
                <input type="password" id="password" placeholder="password" onChange={this.onPasswordChange} value={this.state.password}></input>
                <button onClick={this.onLogIn}>Log In</button>
            </div>
        );
    }
}

export default LoginPage;