import { Create, CreateOutlined, KeyboardArrowDown } from '@material-ui/icons';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/user/userSlice'
import './Inbox.css'

function Inbox() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();


    const openAccountSwitch = () => {

    }

    const openNewMessage = () => {
        
    }

    return (
        <div className="inboxScreen">
            <div className="inboxScreen__container">
                <div className="inbox__sidebar">
                    {/* Sidebar Header*/}
                    <div className="inbox__sidebar--header">
                        <div className="inbox__switchUser" onClick={openAccountSwitch}>
                            <p>{user.username}</p>
                            <KeyboardArrowDown />
                        </div>
                        <div className="inbox__newMessage">
                            <div>
                                <Create />
                            </div>
                        </div>
                    </div>

                    {/* Sidebar ChatList*/}
                    <div className="inbox__sidebar--chatList">

                    </div>
                </div>
                <div className="inbox__main">
                    {/* New Chat Container*/}
                    {/* Chat */}
                </div>
            </div>
        </div>
    )
}

export default Inbox
