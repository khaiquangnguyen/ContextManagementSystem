// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

type Props = {};
const Container = styled.section`
  flex-basis: 15vh;
  background-color: lightcoral;
`;
export default class TimelineBar extends Component<Props> {
  props: Props;

  render() {
    return <Container />;
  }
}
