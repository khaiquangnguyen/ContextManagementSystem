// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import dateFormat from 'dateformat';

const Container = styled.div`
  background-color: red;
  display: inline;
  width: 20 vw;
  height: 8vw;
  margin: 0.5vw;
  display: flex;
  flex-flow: row nowrap;
`;
const Icon = styled.img`
  width: 3vw;
  height: 8vw;
  margin: 0;
  padding: 2px;
  background-color: blue;
`;

const ContentContainer = styled.div`
  width: 17vw;
  height: 8vw;
  margin: 0;
  padding: 2px;
  background-color: brown;
  display: flex;
  flex-flow: column nowrap;
`;

const Content = styled.div``;
const MetaData = styled.div``;
const Controls = styled.div``;
export default class Memo extends Component {
  render() {
    const { memo } = this.props;
    const dateString = dateFormat(memo.date);
    return (
      <Container>
        <Icon />
        <ContentContainer>
          <Content> {memo.text}</Content>
          <MetaData>{dateString}</MetaData>
        </ContentContainer>
      </Container>
    );
  }
}
