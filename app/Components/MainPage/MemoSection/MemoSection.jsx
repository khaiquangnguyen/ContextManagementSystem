// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

type Props = {};
const Container = styled.section`
  flex-basis: 35vh;
  background-color: lightseagreen;
`;
export default class MemoSection extends Component<Props> {
  props: Props;

  render() {
    return <Container />;
  }
}
