const setToken = (token) => {
    localStorage.setItem("token", token);
}

const logout = () => {
    localStorage.clear();
}

const isAuthenticated = () => {
    const backendUrl = "https://andrews-project.glitch.me/authenticate";
    const idToken = localStorage.getItem("token");
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idToken
        })
    };

    // makes api call to backend authentication route
    if(idToken) {
        fetch(backendUrl, options)
        .then(response => console.log(response))
        .then(data => {
            console.log("success:", data);
            return true;
        })
        .catch(error => {
            console.error("error:", error);
            return false;
        });
    }
    return false;
}

export {setToken, logout, isAuthenticated};