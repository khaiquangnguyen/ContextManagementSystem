// @flow
// import React, { Component } from 'react';
import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectNameBar from './ProjectNameBar';
import PreviewSection from './PreviewSection';
import PluginBar from './PluginBar/PluginBar';
import MemoSection from './MemoSection';

const MainSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: stretch;
  padding:0;
  width: auto;
  height: 100vh;
  background-color:#f0f0f0;
`;

const MidSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis:60vw;
  margin-left:0.5vw;
  margin-right:0.5vw;
  align-items: flex-center;
  align-content:flex-center;
`;

export default class MainPage extends Component{
  render() {
    return (
      <MainSection>
        <ProjectNameBar />
        <MidSection>
          <PreviewSection />
          <MemoSection />
        </MidSection>
        <PluginBar />
      </MainSection>
    );
  }
}
