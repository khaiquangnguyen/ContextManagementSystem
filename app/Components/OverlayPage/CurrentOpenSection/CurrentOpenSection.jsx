// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import ApplicationThumbnail from './ApplicationThumbnail';

type Props = {};
const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-basis: 60vw;
  background-color: lightgrey;
  flex-wrap: wrap;
  align-items: start;
  align-content: start;
  justify-content: space-between;
  padding: 1vw;
`;
export default class CurrentOpenSection extends Component<Props> {
  props: Props;

  render() {
    return (
      <Container>
        <ApplicationThumbnail />
        <ApplicationThumbnail />
        <ApplicationThumbnail />
        <ApplicationThumbnail />
      </Container>
    );
  }
}
