// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Memo from './Memo';
type Props = {};
const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis: 20vw;
  background-color: lightpink;
  align-items: center;
`;

export default class MemoSection extends Component<Props> {
  props: Props;

  render() {
    return (
      <Container>
        <Memo></Memo>
      </Container>
    );
  }
}
