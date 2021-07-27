import React, { useState } from 'react'
import './Navigation.css'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser, selectUser } from '../../features/user/userSlice'
import { Link, Redirect } from 'react-router-dom';
import { Explore, ExploreOutlined, Favorite, FavoriteBorderOutlined, FavoriteOutlined, Home, HomeOutlined, Inbox, NearMeOutlined, Search } from '@material-ui/icons';
import { UserAvatar } from '../../helpers/styled/styled-component-common'
import { auth } from '../../helpers/firebase/firebase';
import { loadingTrue } from '../../features/loading/loadingSlice';
import SwitchAccount from '../switchAccount/SwitchAccount';

function Navigation() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch()
    const [profileLinks, setProfileLinks] = useState(false);
    const [switchAc, setSwitchAc] = useState(false);


    const closeProfileLinks = () => {
        setProfileLinks(false);
    }

    const openProfileLinks = () => {
        setProfileLinks(true);
    }

    const manageProfileLinks = () => {
        if(profileLinks){
            closeProfileLinks();
        }
        else {
            openProfileLinks();
        }
    }

    const setActive = () => {

    }

    const openSwitchAccount = () => {
        setSwitchAc(true);
    }

    const closeSwitchAccount = () => {
        setSwitchAc(false); 
    }

    const switchAccount = () => {
        openSwitchAccount();
        closeProfileLinks();
    }

    const logOut = () => {
        closeProfileLinks();
        dispatch(loadingTrue());
        auth.signOut();
        dispatch(logoutUser());
    }

    return (
      <div className="navigation__wrapper">
        <div className="navigation">
          <div className="nav">
            <div className="nav__logo">
              <img src="/images/instagramNameLogo.png" alt="" />
            </div>
            <form action="" className="nav__search">
              <Search />
              <input type="text" placeholder="Search" />
              <button type="submit"></button>
            </form>

            {user && (
              <>
                <ul className="nav__links">
                  <li onClick={setActive} className="active">
                    <Link to="/">
                      <HomeOutlined />
                    </Link>
                  </li>
                  <li onClick={setActive}>
                    <Link to="/direct/inbox/">
                      <NearMeOutlined />
                    </Link>
                  </li>
                  <li onClick={setActive}>
                    <Link to="/explore/">
                      <ExploreOutlined />
                    </Link>
                  </li>
                  <li onClick={setActive}>
                    <button>
                      <FavoriteBorderOutlined />
                    </button>
                  </li>
                </ul>
                <div className="nav__user">
                  <UserAvatar
                    onClick={manageProfileLinks}
                    size="35"
                    src={user.photoURL && user.photoURL}
                  />
                  {profileLinks && (
                    <ul className="nav__profile--links">
                      <li>
                        <Link to="/profile" onClick={closeProfileLinks}>
                          <span>Profile</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/saved" onClick={closeProfileLinks}>
                          <span>Saved</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/accounts/settings/"
                          onClick={closeProfileLinks}
                        >
                          <span>Settings</span>
                        </Link>
                      </li>
                      <li>
                        <button onClick={switchAccount}>
                          <span>Switch Account</span>
                        </button>
                      </li>
                      <li className="nav__logout">
                        <Link to="/" onClick={logOut}>
                          <span>Log Out</span>
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </>
            )}
            {!user && (
              <>
                <div className="nav__buttons">
                  <Link to="/">
                    <button className="nav__button--login">Log In</button>
                  </Link>
                  <Link to="/signin">
                    <button className="nav__button--signin">Sign Up</button>
                  </Link>
                </div>
              </>
            )}
          </div>
          {user && (
            <>{switchAc && <SwitchAccount close={closeSwitchAccount} />}</>
          )}
        </div>
      </div>
    );
}

export default Navigation
 