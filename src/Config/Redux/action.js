import { firebaseApp } from '../../Config/Firebase/firebase'

function Signup(data, path) {

    return (dispatch) => {

        firebaseApp.auth().createUserWithEmailAndPassword(data.email, data.password).then((user) => {
            alert('Sign Up Successful')
            console.log(user.user.uid)

            firebaseApp.firestore().collection('users').doc(user.user.uid).set({
                userId: user.user.uid,
                email: data.email
            }).then((res) => {
                console.log(res)

                dispatch({ type: "signup" })
                path.push('/')

            })

        })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                dispatch({ type: "signupFailed", signuperror: errorMessage })
                // ...
            });

    }

}

function LogIn(data,path){
    return (dispatch) => {
    firebaseApp.auth().signInWithEmailAndPassword(data.email, data.password)
    .then((user)=>{
        console.log(user)
        firebaseApp.firestore().collection(`users`).doc(user.user.uid).get()
        .then((res)=>{
            console.log(res.data())
            let data = res.data();
            localStorage.setItem('currentUser',JSON.stringify(data))

            dispatch({ type: "signup" })
            path.push('/home')

        })

    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        dispatch({ type: "loginFailed", loginerror: errorMessage })
        // ...
      });
}
}

export {
    Signup,
    LogIn,
}