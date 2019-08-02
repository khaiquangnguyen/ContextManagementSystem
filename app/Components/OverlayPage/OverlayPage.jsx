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

import { addScreen, removeScreen } from '../../actions/CurrentOpenActions';

const Overlay = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-item:
  align-content: stretch;
  width: 100vw;
  height: 100vh;
  background:none;
`;

const Background = styled.div`
  position: fixed; /* Sit on top of the page content */
  width: 100vw; /* Full width (cover the whole page) */
  height: 100vh; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4); /* Black background with opacity */
  z-index: -10000; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
  filter: blur(2px);
`;

class OverlayPage extends Component {
  componentDidMount() {
    const { props } = this;
    props.addProject('Project 1');
    props.addProject('Project 2');
    props.addProject('Project 3');
    props.addTextMemo('this is a memo');
    props.addTextMemo('this is another memo');
    props.addScreen('what');
    props.addScreen('what');
  }

  render() {
    return (
      <>
        <Background> </Background>
        <Overlay>
          <ProjectNameBar />
          <CurrentOpenSection />
          <MemoSection />
        </Overlay>
      </>
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
