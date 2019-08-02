const initState = {
    username: '',
    password: '',
    isAuthenticate: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log('login success', action.data);
            return {
                ...state,
                isAuthenticate: true
            };

        case "LOGIN_ERROR":
            alert("Wrong username / password");
            return state;
        default:
            return state;
    }
}

export default authReducer