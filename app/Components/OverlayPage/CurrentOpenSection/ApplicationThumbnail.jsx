// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: red;
  display: block;
  width: 28vw;
  height: 19vw;
  margin: 0.5vw;
`;
const Thumbnail = styled.img`
  width: 28vw;
  height: 16vw;
  margin: 0;
  padding: 2px;
  background-color: blue;
`;
const Name = styled.div`
  width: 28vw;
  height: 3vw;
  margin: 0;
  padding: 5px;
  background-color: black;
`;
export default class ApplicationThumbnail extends Component {
  render() {
    return (
      <Container>
        <Name> Test Thumbnail </Name>
        <Thumbnail />
      </Container>
    );
  }
}
