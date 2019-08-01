// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ApplicationThumbnail from './ApplicationThumbnail';

type Props = {};
const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-basis: 60vw;
  background-color: lightgrey;
  flex-wrap: wrap;
  align-items: start;
  align-content: start;
  justify-content: space-between;
  padding: 1vw;
  background: none;
`;
class CurrentOpenSection extends Component<Props> {
  props: Props;

  render() {
    const screens = [];
    const { props } = this;
    props.screens.forEach(screen => {
      screens.push(<ApplicationThumbnail screen={screen} />);
    });
    return <Container>{screens}</Container>;
  }
}

function mapStateToProps(state) {
  return {
    screens: state.currOpenScreens
  };
}
export default connect(mapStateToProps)(CurrentOpenSection);
