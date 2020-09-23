const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
}

const logout = () => {
    localStorage.clear();
}

const isAuthenticated = () => {
    if(localStorage.getItem("user")) {
        return true;
    }
    return false;
}

export {setUser, logout, isAuthenticated};