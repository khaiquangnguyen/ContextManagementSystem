// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import {desktopCapturer,screen} from 'electron';
const Container = styled.div`
  background-color: none;
  display: block;
  width: 28vw;
  height: 19vw;
  margin: 0.5vw;
`;
const Thumbnail = styled.img`
  width: 28vw;
  height: auto;
  margin: 0;
  padding: 2px;
  background:none;
`;
const Name = styled.div`
  width: 28vw;
  height: 2vw;
  margin: 0;
  padding: 5px;
  background-color: black;
`;

export default class ApplicationThumbnail extends Component {
  render() {
    return (
      <Container>
        <Name> Test Thumbnail </Name>
        <Thumbnail src = "./Capture.png"/>
      </Container>
    );
  }
}
