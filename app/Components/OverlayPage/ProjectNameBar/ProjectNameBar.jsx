// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
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
        <button
          type="submit"
          onClick={() => {
            props.addProject('Project 1');
          }}
        >
          Click Me!
        </button>
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
