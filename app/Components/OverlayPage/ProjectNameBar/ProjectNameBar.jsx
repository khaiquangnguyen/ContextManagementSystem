// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import SplitViewCommand from 'react-uwp/SplitViewCommand';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis: 15vw;
  background-color: black;
  align-items: center;
`;

class ProjectNameBar extends Component {
  render() {
    const thumbnails = [];
    const { props } = this;
    props.projects.forEach(element => {
      thumbnails.push(
        <SplitViewCommand label={element.name} icon="PrintLegacy" />
      );
    });
    return <Container>{thumbnails}</Container>;
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projectNames
  };
}
export default connect(mapStateToProps)(ProjectNameBar);
