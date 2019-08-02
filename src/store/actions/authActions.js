export const signIn = (cred) => {
    return (dispatch, getState) => {
        if (cred.username === "jawdat" && cred.password === "jawdat") {
            dispatch({ type: 'LOGIN_SUCCESS', cred })
        } else {
            dispatch({ type: 'LOGIN_ERROR' })
        }
    }
}