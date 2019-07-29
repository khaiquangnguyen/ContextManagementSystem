// @flow
// import React, { Component } from 'react';
import React, { Component } from 'react';
import styles from './MainPage.css';
// import ProjectNameBar from '../ProjectNameBar';
// import PluginBar from '../PluginBar/PluginBar';
// import PreviewSection from '../PreviewSection';
// import MemoSection from '../MemoSection';
// import TimelineBar from '../TimelineBar';
// import OverlayBar from '../Overlay';

type Props = {};

export default class MainPage extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className = {styles.MainPage}>
        <section className = {styles.ProjectNameBar}> </section>
        <section className = {styles.TimelineBar}></section>
        <section className = {styles.CenterSection}>
          <section className = {styles.PreviewSection}></section>
          <section className = {styles.MemoSection}></section>
        </section>
        <section className = {styles.PluginBar}> </section>
      </div>
    )
  }
}
