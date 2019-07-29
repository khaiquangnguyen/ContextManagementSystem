// @flow
// import React, { Component } from 'react';
import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectNameBar from './ProjectNameBar';
import PreviewSection from './PreviewSection';
import PluginBar from './PluginBar/PluginBar';
import MemoSection from './MemoSection';
import TimelineBar from './TimelineBar';

type Props = {};

const MainSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: stretch;
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
`;

const MidSection = styled.section`
  flex-basis: 60vw;
  display: flex;
  flex-direction: column;
`;

export default class MainPage extends Component<Props> {
  props: Props;

  render() {
    return (
      <MainSection>
        <ProjectNameBar />
        <MidSection>
          <PreviewSection />
          <TimelineBar />
          <MemoSection />
        </MidSection>
        <PluginBar />
      </MainSection>
    );
  }
}
