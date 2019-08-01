// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import Separator from 'react-uwp/Separator';
import {
  addProject,
  removeProject,
  selectProject
} from '../../../actions/ProjectNamesActions';
import ProjectNameItem from './ProjectNameItem';
const Container = styled.section`
  display: block;
  flex-basis: 10vw;
  background:none;
  align-items: center;
`;

const Title = styled.h1`
  margin:1vw;
  font-size: 18px;
`;


class ProjectNameBar extends Component {
  context: { theme: ReactUWP.ThemeType };

  // eslint-disable-next-line react/forbid-prop-types
  static contextTypes = { theme: PropTypes.object };

  render() {
    const { theme } = this.context;
    const thumbnails = [];
    const { props } = this;
    props.projects.forEach(element => {
      thumbnails.push(<ProjectNameItem name = {element.name}></ProjectNameItem>);
      thumbnails.push(<Separator></Separator>)
    });

    return (
      <Container
        style={{background: theme.acrylicTexture60.background}}
      >
        <Title> PROJECTS </Title>
        <Separator></Separator>
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
