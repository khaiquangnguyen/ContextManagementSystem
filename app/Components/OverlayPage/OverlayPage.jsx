// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ProjectNameBar from './ProjectNameBar';
import CurrentOpenSection from './CurrentOpenSection';
import MemoSection from '../MemoSection';
import {
  addProject,
  removeProject,
  selectProject
} from '../../actions/ProjectNamesActions';
import {
  addTextMemo,
  addVoiceMemo,
  removeMemo
} from '../../actions/MemoActions';

import {addScreen,removeScreen} from '../../actions/CurrentOpenActions';
const Overlay = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-item:
  align-content: stretch;
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
`;
class OverlayPage extends Component {
  componentDidMount() {
    console.log(this.props);
    const { props } = this;
    props.addProject('Project 1');
    props.addProject('Project 2');
    props.addProject('Project 3');
    props.addTextMemo('this is a memo');
    props.addTextMemo('this is another memo');
    props.
  }

  render() {
    return (
      <Overlay>
        <ProjectNameBar />
        <CurrentOpenSection />
        <MemoSection />
      </Overlay>
    );
  }
}

export default connect(
  null,
  {
    addProject,
    removeProject,
    selectProject,
    addTextMemo,
    addVoiceMemo,
    removeMemo,
    addScreen,
    removeScreen
  }
)(OverlayPage);
