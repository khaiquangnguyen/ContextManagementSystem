// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import NameIcon from './NameIcon';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

type Props = {};
const Container = styled.section`
  display: flex;
  flex-direction: column;
  height:98vh;
  flex-basis: 15vw;
  background-color: lightgreen;
  align-items: center;
`;
export default class ProjectNameBar extends Component<Props> {
  props: Props;

  render() {
    return (
      <Container style={{ boxShadow: Depths.depth4 }}>
        <NameIcon />
        <NameIcon />
        <NameIcon />
      </Container>
    );
  }
}
