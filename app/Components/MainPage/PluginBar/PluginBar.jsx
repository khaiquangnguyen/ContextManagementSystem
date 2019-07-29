// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

type Props = {};
const Container = styled.section`
  flex-basis: 25vw;
  background-color: lightsalmon;
`;
export default class PluginBar extends Component<Props> {
  props: Props;

  render() {
    return <Container> </Container>;
  }
}
