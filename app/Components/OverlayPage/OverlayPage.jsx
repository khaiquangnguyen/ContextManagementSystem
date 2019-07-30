// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectNameBar from './ProjectNameBar';
import CurrentOpenSection from './CurrentOpenSection';
const Overlay = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: stretch;
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
`;
export default class OverlayPage extends Component {
  render() {
    return(
    <Overlay>
      <ProjectNameBar></ProjectNameBar>
      <CurrentOpenSection></CurrentOpenSection>
    </Overlay>
    )
  }
}
