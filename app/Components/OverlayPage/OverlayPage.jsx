// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
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
  background:transparent;
`;
class OverlayPage extends Component {
  context: { theme: ReactUWP.ThemeType };

  // eslint-disable-next-line react/forbid-prop-types
  static contextTypes = { theme: PropTypes.object };
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
    const { theme } = this.context;
    return (
      <Overlay
        style={{
          background: theme.acrylicTexture40.background
        }}
      >
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
