// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: red;
  width: 3vw;
  height: 3vw;
  margin: 0.5vw;
`;
const Avatar = styled.div``;

const Name = styled.div``;
export default class NameIcon extends Component {
  render() {
    return (
      <Container>
        <Avatar />
        <Name> adfadsdsads </Name>
      </Container>
    );
  }
}
