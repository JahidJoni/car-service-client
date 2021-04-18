import React, { useContext } from 'react';
import Navbar from '../Home/Header/Navbar/Navbar';
import firebaseConfig from './firebase.config'
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const user = result.user;
        setLoggedInUser(user)
        storeAuthToken();
        history.replace(from)
      }).catch((error) => {
        var errorMessage = error.message;
      });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="d-flex justify-content-center py-5">
        <div className="text-center mt-5 bg-dark py-5 w-50">
          <h2 className="pt-5" style={{ color: '#0bff96' }}>Login to get our awesome services</h2>
          <button onClick={handleSignIn} className="mt-5 btn btn-info">Continue With Google</button>
          <p className="mt-2"><small className="text-secondary">Don't have an account? Create One.</small></p>
        </div>
      </div>
     {
       loggedInUser&& <h4 className="text-success text-center">Welcome! {loggedInUser.displayName}</h4>
        }
    </div>
  );
};

export default Login;