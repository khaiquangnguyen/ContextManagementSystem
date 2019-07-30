// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: red;
  display:block;
  width: 15vw;
  height: 10vw;
  margin: 0.5vw;
`;
const Thumbnail = styled.img`
width: 15vw;
height: 8vw;
margin:0;
padding:2px;
background-color:blue;
`;
const Name = styled.div`
  width:15vw;
  height:2vw;
  margin:0;
  padding:5px;
  background-color:black;
`;
export default class ProjectThumbnail extends Component {
  render() {
    return (
      <Container>
        <Name> adfadsdsads </Name>
        <Thumbnail />
      </Container>
    );
  }
}
