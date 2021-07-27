import React from 'react'
import styled from 'styled-components'
import Registration from '../../components/registration/Registration'

function SignIn() {
    return (
        <SignInContainer>
            <Registration login={false} />
        </SignInContainer>
    )
}

export default SignIn


const SignInContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`