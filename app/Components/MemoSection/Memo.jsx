// @flow
import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  background-color: red;
  display: inline;
  width: 20vw;
  height: 10vw;
  margin: 0.5vw;
  display:flex;
  flex-flow:row nowrap;
`;
const Icon = styled.img`
  width: 3vw;
  height: 10vw;
  margin: 0;
  padding: 2px;
  background-color: blue;
`;

const Title = styled.div`
  width: 20vw;
  height: 2vw;
  margin: 0;
  padding: 5px;
  background-color: black;
`;

const ContentContainer = styled.div`
  width: 17vw;
  height: 10vw;
  margin: 0;
  padding: 2px;
  background-color: yellow;
  display:flex;
  flex-flow: column nowrap;
`;

const Content = styled.div``;
const MetaData = styled.div``;
const Controls = styled.div``;
export default class Memo extends Component {
  render() {
    return (
      <Container>
        <Icon />
        <ContentContainer>
          <Title />
          <Content />
          <MetaData />
        </ContentContainer>

      </Container>
    );
  }
}
