// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import NameIcon from './NameIcon';

type Props = {};
const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis: 15vw;
  background-color: lightgreen;
  align-items: center;
`;
export default class ProjectNameBar extends Component<Props> {
  props: Props;

  render() {
    return (
      <Container>
        <NameIcon />
        <NameIcon />
        <NameIcon />
      </Container>
    );
  }
}
