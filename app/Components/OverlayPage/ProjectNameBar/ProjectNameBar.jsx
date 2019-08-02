// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Separator } from 'office-ui-fabric-react/lib/Separator';
import { PrimaryButton } from 'office-ui-fabric-react';

import {
  addProject,
  removeProject,
  selectProject
} from '../../../actions/ProjectNamesActions';
import ProjectNameItem from './ProjectNameItem';

const Container = styled.section`
  display: block;
  flex-basis: 10vw;
  background: none;
  margin-left: 2vw;
  align-items: center;
`;

const Title = styled.h1`
  margin: 1vw;
  font-size: 18px;
`;

class ProjectNameBar extends Component {
  render() {
    const thumbnails = [];
    const { props } = this;
    props.projects.forEach(element => {
      thumbnails.push(<ProjectNameItem name={element.name} />);
    });

    return (
      <Container>
        <Title> PROJECTS </Title>
        {thumbnails}
        <PrimaryButton
          type="submit"
          onClick={() => {
            props.addProject('Project 1');
          }}
        >
          Add Project
        </PrimaryButton>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projectNames
  };
}
export default connect(
  mapStateToProps,
  { addProject, removeProject, selectProject }
)(ProjectNameBar);
