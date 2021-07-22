import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Loading from './components/loading/Loading';

/* Routing */
import ProtectedRoute from './helpers/routing/ProtectedRoute';
import UnProtectedRoute from './helpers/routing/UnProtectedRoute';

/* Pages */
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignIn from './pages/signin/SignIn';

/* Components */
import Navigation from './components/navigation/Navigation';
import ProfilePreview from './components/profilePreview/ProfilePreview';
import { loginUser, selectUser } from './features/user/userSlice';
import { loadingFalse, selectLoading } from './features/loading/loadingSlice';
import { useSelector } from 'react-redux';
import { auth, db } from './helpers/firebase/firebase';
import { useDispatch } from 'react-redux';

function App() {
  const loading = useSelector(selectLoading);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  /* For Start checks if there is a user */
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        console.log(userAuth);
        db.collection("users")
          .where("email", "==", userAuth.email)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              dispatch(
                loginUser({
                  username: userAuth.displayName,
                  email: userAuth.email,
                  fullname: doc.data().full_name,
                  photoURL: doc.data().photoURL,
                  id: userAuth.uid,
                })
              );
            });
          });
        dispatch(loadingFalse());
      }
      else {
        dispatch(loadingFalse());
      }
    })
  },[])
  
  useEffect(()=>{
    dispatch(loadingFalse());
  },[user]);
  

  if(loading){
    return (
      <div className="app">
        <Loading />
      </div>
    )
  }

  if(!user){
    return (
      <div className="app">
        <Switch>
          {/* Login Page */}
          <Route exact path="/">
            <Login />
          </Route>

          {/* SignIn Page */}
          <Route path="/accounts/signin">
            <SignIn />
          </Route>

          {/* Other Pathes */}
          <Route path="*">
            <Navigation />
            <ProfilePreview />
          </Route>
        </Switch>
      </div>
    );
  }

  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
