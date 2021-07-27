import React, { useRef, useState, useEffect } from 'react'
import './Registration.css'
import { Link } from 'react-router-dom';
import { Facebook } from '@material-ui/icons';
import { auth, db } from '../../helpers/firebase/firebase';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../features/user/userSlice'
import firebase from 'firebase'

function Registration({login}) {
    const emailRef = useRef(null);
    const fullnameRef = useRef(null);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [number, setNumber] = useState(0);
    const [button, setButton] = useState(false);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    /*
    
    */

    const Login  = (email, password) => {
      auth.signInWithEmailAndPassword(email, password)
      .then(userAuth=>{
        db.collection("users")
          .where("email", "==", userAuth.user.email)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach((doc)=>{
              dispatch(
                loginUser({
                  username: userAuth.user.displayName,
                  email: userAuth.user.email,
                  fullname: doc.data().full_name,
                  photoURL: doc.data().photoURL,
                  id: userAuth.user.uid
                })
              );
            })          
          });
      }).catch(error=>setError(true));
    }

    const SignUp = (email, password, fullname, username) => {
      auth.createUserWithEmailAndPassword(email, password)
      .then(userAuth=>{
        userAuth.user.updateProfile({
          displayName: username,
          photoURL:""
        })
        db.collection("users").add({
          date_created: firebase.firestore.FieldValue.serverTimestamp(),
          date_updated: firebase.firestore.FieldValue.serverTimestamp(),
          username: username,
          email: email,
          full_name: fullname,
          photoURL: "",
        })
        dispatch(loginUser({
          username: username,
          email: email,
          fullname: fullname,
          photoURL: userAuth.user.photoURL,
          id:userAuth.user.uid,
        }))
      })
      .catch(error=>{
        setError(true);
        console.log(error.message);
      })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(false);
        if(login){
          if(emailRef.current.value && passwordRef.current.value){
            Login(emailRef.current.value, passwordRef.current.value);
          }
        }else {
          if(emailRef.current.value 
            && passwordRef.current.value 
            && fullnameRef.current.value 
            && usernameRef.current.value){
              SignUp(emailRef.current.value, passwordRef.current.value, fullnameRef.current.value, usernameRef.current.value);
            }
        }
    }

    const increaseNumber = () => {
      setNumber(number + 1);
    };

    useEffect(()=>{
      setError(false);
      if(login){
        if(emailRef.current.value && passwordRef.current.value){
          setButton(true);
        }
        else {
          setButton(false);
        }
      }
      else {
        if (emailRef.current.value 
            && passwordRef.current.value
            && fullnameRef.current.value
            && usernameRef.current.value) {
          setButton(true);
        } else {
          setButton(false);
        }
      }
    }, [number])

    useEffect(() => {
      setError(false);
      if (login) {
        if (emailRef.current.value && passwordRef.current.value) {
          setButton(true);
        } else {
          setButton(false);
        }
      } else {
        if (
          emailRef.current.value &&
          passwordRef.current.value &&
          fullnameRef.current.value &&
          usernameRef.current.value
        ) {
          setButton(true);
        } else {
          setButton(false);
        }
      }
    }, [ ]);

    return (
      <div className="registration">
        <div className="registration__main">
          <div className="registration__main--header">
            <h1>Instagram</h1>
            {!login && (
              <p>Sign up to see photos and videos from your friends.</p>
            )}
          </div>

          {/* If it is sign up page*/}
          {!login && (
            <>
              <button className="registration__register-facebook">
                <Facebook />
                Log in with Facebook
              </button>
              <div className="or-container">
                <div></div>
                <p>OR</p>
                <div></div>
              </div>
            </>
          )}

          <form
            className="registration__form"
            action=""
            autoComplete={`${login ? "on":"off"}`}
          >
            {!login ? (
              /* If User is trying to Sign Up*/
              <>
                <input
                  type="email"
                  className="registration__input"
                  placeholder="Email"
                  ref={emailRef}
                  autoComplete="off"
                  onChange={increaseNumber}
                />
                <input
                  type="text"
                  className="registration__input"
                  placeholder="Full Name"
                  ref={fullnameRef}
                  autoComplete="off"
                  onChange={increaseNumber}
                />
                <input
                  type="text"
                  className="registration__input"
                  placeholder="Username"
                  ref={usernameRef}
                  autoComplete="false"
                  onChange={increaseNumber}
                />
                <input
                  type="password"
                  className="registration__input"
                  placeholder="Password"
                  ref={passwordRef}
                  autoComplete="new-password"
                  onChange={increaseNumber}
                />
              </>
            ) : (
              /* If User is trying to login */
              <>
                <input
                  type="email"
                  className="registration__input"
                  placeholder="Email"
                  ref={emailRef}
                  onChange={increaseNumber}
                />

                <input
                  type="password"
                  className="registration__input"
                  placeholder="Password"
                  ref={passwordRef}
                  onChange={increaseNumber}
                />
              </>
            )}
            {error && (
              <p className="registration__error">
                {login
                  ? "Email or Password is incorrect please try again."
                  : "Something went wrong please try again."}
              </p>
            )}
            <button
              type="submit"
              className={`registration__button ${button && "button"}`}
              onClick={handleSubmit}
            >
              {login ? "Log In" : "Sign Up"}
            </button>
            {!login && (
              <p className="registration__policy">
                By signing up, you agree to our Terms , Data Policy and Cookies
                Policy .
              </p>
            )}
          </form>

          {/* If it is Login Page */}
          {login && (
            <>
              <div className="or-container">
                <div></div>
                <p>OR</p>
                <div></div>
              </div>
              <div className="registration__login">
                <button className="registration__login-facebook btn-white">
                  <Facebook />
                  Login with Facebook
                </button>
                <br />
                <button className="registration__forgot-password">
                  Forgot password?
                </button>
              </div>
            </>
          )}
        </div>

        <div className="registration__redirect">
          {login ? (
            <>
              <p>Don't have an account? </p>
              <Link to="/accounts/signin">Sign up</Link>
            </>
          ) : (
            <>
              <p>Have and account? </p>
              <Link to="/">Log In</Link>
            </>
          )}
        </div>

        <div className="registration__getApp">
          <p>Get the app.</p>
          <div className="div">
            <img src="images/instagramAppleStore.png" alt="" />
            <img src="images/instagramGooglePlay.png" alt="" />
          </div>
        </div>
      </div>
    );
}

export default Registration
