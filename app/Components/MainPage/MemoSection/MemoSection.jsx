// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

type Props = {};
const Container = styled.section`
  flex-basis:47vh;
  background-color: white;
  display:flex;
  flex-flow:row wrap;
`;
export default class MemoSection extends Component<Props> {
  props: Props;

  render() {
    return <Container style={{ boxShadow: Depths.depth4 }}> </Container>;
  }
}
