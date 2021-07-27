import React from 'react'
import './Widgets.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { selectUser } from '../../features/user/userSlice'
import { BlackButton, BlueButton, UserAvatar } from '../../helpers/styled/styled-component-common';

function Widgets() {
    const user = useSelector(selectUser);

    return (
      <div className="widgets">
        {/* User Profile and Username Display*/}
        <div className="widgets__user">
          <Link to="/profile/">
            <UserAvatar size={45} src={user.photoURL} />
          </Link>
          <div className="widgets__username">
            <Link to="/profile/">
              <p>{user.username}</p>
            </Link>
            <p>{user.fullname}</p>
          </div>
          <BlueButton>Switch</BlueButton>
        </div>

        {/* Suggests People User May Like To Follow*/}
        <div className="widgets__suggested">
          <div className="widgets__suggested--header">
            <h4>Suggested For You</h4>
            <BlackButton>See All</BlackButton>
          </div>
          <div className="widgets__suggested--users">
            <div className="widgets__user">
              <Link to="/profile/">
                <UserAvatar size={35} src={user.photoURL} />
              </Link>
              <div className="widgets__username">
                <Link to="/profile/">
                  <p>{user.username}</p>
                </Link>
                <p>{user.fullname}</p>
              </div>
              <BlueButton>Follow</BlueButton>
            </div>

            <div className="widgets__user">
              <Link to="/profile/">
                <UserAvatar size={35} src={user.photoURL} />
              </Link>
              <div className="widgets__username">
                <Link to="/profile/">
                  <p>{user.username}</p>
                </Link>
                <p>{user.fullname}</p>
              </div>
              <BlueButton>Follow</BlueButton>
            </div>

            <div className="widgets__user">
              <Link to="/profile/">
                <UserAvatar size={35} src={user.photoURL} />
              </Link>
              <div className="widgets__username">
                <Link to="/profile/">
                  <p>{user.username}</p>
                </Link>
                <p>{user.fullname}</p>
              </div>
              <BlueButton>Follow</BlueButton>
            </div>

            <div className="widgets__user">
              <Link to="/profile/">
                <UserAvatar size={35} src={user.photoURL} />
              </Link>
              <div className="widgets__username">
                <Link to="/profile/">
                  <p>{user.username}</p>
                </Link>
                <p>{user.fullname}</p>
              </div>
              <BlueButton>Follow</BlueButton>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Widgets
