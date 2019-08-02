// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

type Props = {};
const Container = styled.section`
  height: 50vh;
  margin:0;
  padding:0;
  margin-bottom:1vh;
  background-color: white;
`;
export default class PreviewSection extends Component<Props> {
  props: Props;

  render() {
    return <Container style={{ boxShadow: Depths.depth4 }}> </Container>;
  }
}
