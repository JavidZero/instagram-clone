import React, { useEffect, useState } from 'react'
import './Main.css'
import Feeds from '../../components/feed/Feeds'
import Widgets from '../../components/widgets/Widgets'

function Main() {

    return (
        <div className="mainScreen">
            <div className="mainScreen__container">
                <div className="mainScreen__feed">
                    <Feeds />
                </div>
                <div className="mainScreen__widgets">
                    <Widgets />
                </div>
            </div>
        </div>
    )
}

export default Main
