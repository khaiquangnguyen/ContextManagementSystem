// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

type Props = {};
const Container = styled.section`
  display: flex;
  flex-direction: column;
  height:98vh;
  flex-basis: 25vw;
  background-color: lightgreen;
  align-items: center;
`;
export default class PluginBar extends Component<Props> {
  props: Props;

  render() {
    return <Container style={{ boxShadow: Depths.depth4 }} > </Container>;
  }
}
