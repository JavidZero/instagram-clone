import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Registration from '../../components/registration/Registration';
import { loadingFalse } from '../../features/loading/loadingSlice';

function Login() {
    const dispatch = useDispatch();


    return (
        <LoginContainer>
            <LoginPicture>
            </LoginPicture>
            <Registration login={true} />
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    flex: 0.5;
  }

  @media only screen and (max-width: 768px) {
    > div {
        flex: 1;
    }
  }
`;

const LoginPicture = styled.div`
    flex: .5;
    width: 100%;
    height: 100vh;
    display: block;
    background-color: red;
    background-image: url("images/phone.jpg");
    background-position: center;
    background-repeat: no-repeat;
    display: none;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`