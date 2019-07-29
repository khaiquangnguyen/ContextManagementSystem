// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

type Props = {};
const Container = styled.section`
  height: 50vh;
  background-color: lightgray;
`;
export default class PreviewSection extends Component<Props> {
  props: Props;

  render() {
    return <Container> </Container>;
  }
}
