import React from 'react'
import styled from 'styled-components'
import loadingLogo from '../../loadingLogo.png';

function Loading() {
    return (
        <LoadingContainer>
            <img src={loadingLogo} alt=""/>
        </LoadingContainer>
    )
}

export default Loading

const LoadingContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
        max-width: 150px;
        max-height: 150px;
    }
`