import { Close } from '@material-ui/icons'
import React from 'react'
import './SwitchAccount.css'

function SwitchAccount({close}){
    
    return (
        <div className="switch__wrapper">
            <div className="switch__container">
                <div className="switch__header">
                    <h3>Switch Accounts</h3>
                    <div className="close" onClick={close}>
                        <Close />
                    </div>
                </div>
                <div className="switch__body">
                    <p>body</p>
                </div>
            </div>
        </div>
    )
}

export default SwitchAccount
