// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectThumbnail from './ProjectThumbnail';

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
        <ProjectThumbnail />
        <ProjectThumbnail />
        <ProjectThumbnail />
      </Container>
    );
  }
}
