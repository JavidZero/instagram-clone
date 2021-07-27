import React from 'react'
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer'

/* Screens */
import Main from '../../screens/main/Main'
import Inbox from '../../screens/inbox/Inbox'
import Explore from '../../screens/explore/Explore'

function Home() {
    return (
      <HomeContainer>
        <Navigation/>
        <BodyContainer>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/direct/inbox/">
              <Inbox />
            </Route>
            <Route path="/explore/">
              <Explore />
            </Route>
          </Switch>
        </BodyContainer>
        <Footer/>
      </HomeContainer>
    );
}

export default Home

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;


const BodyContainer = styled.main`
  width: 100%;
  height: auto;
  min-height: calc(100vh - 115px);
`;
