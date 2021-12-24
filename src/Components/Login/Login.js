import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import logo from '../../images/logos/Group 1329.png'
import { FcGoogle } from "react-icons/fc";
import { firebaseConfig } from './firebaseConfig';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { UserInfo } from '../../App';
import { useLocation, useHistory } from 'react-router-dom';



const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/home" } }
    const [user, setUser] = useContext(UserInfo)
    const app = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // const user = result.user;
                const { displayName, email } = result.user
                // console.log(result.user)
                // console.log(displayName,email)
                setUser({
                    isSignIn: true,
                    displayName,
                    email
                })
                // console.log(user)
                authIdToken()
                history.replace(from)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    // const handleGoogleSignOut = () => {
    //     const auth = getAuth();
    //     signOut(auth)
    //         .then(() => {
    //             setUser({
    //                 isSignIn: false,
    //                 displayName: '',
    //                 email: '',
    //                 date: '',
    //                 descriptrion: '',
    //                 library: ''
    //             })
    //         })
    //         .catch((error) => {
    //         });
    // }

    const authIdToken=()=>{
        const auth = getAuth();
        auth.currentUser.getIdToken(/* forceRefresh */ true)
        .then((idToken)=> {
            console.log(idToken)
          }).catch((error) =>{
            console.log(error)
          });
    }


    return (
        <div className='bg-light' style={{ height: '100vh' }}>
            <Container>
                <div style={{ textAlign: 'center', marginBottom: '40px', paddingTop: '40px' }}>
                    <img style={{ width: '200px', height: '60px' }} src={logo} alt="logo" />
                </div>
                <div style={{ textAlign: 'center', backgroundColor: 'white', height: '300px', width: '400px', margin: '0px auto', border: '1px solid gray', borderRadius: '5px' }}>
                    <div style={{ position: 'relative', top: '80px' }}>
                        <h1 style={{ marginBottom: '20px' }}>Login With</h1>
                        <Button onClick={handleGoogleSignIn} style={{ backgroundColor: 'none' }}><FcGoogle style={{ marginRight: '50px', padding: '10px' }} />Continue with Google</Button>
                        <p>Don't you have an account</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;