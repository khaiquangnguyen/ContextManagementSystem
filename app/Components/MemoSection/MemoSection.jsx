// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Memo from './Memo';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis: 20vw;
  background-color: lightpink;
  align-items: center;
`;

class MemoSection extends Component {
  render() {
    const memos = [];
    const { props } = this;
    props.memos.forEach(memo => {
      memos.push(<Memo memo={memo} />);
    });
    return <Container>{memos}</Container>;
  }
}

function mapStateToProps(state) {
  return {
    memos: state.memos
  };
}
export default connect(mapStateToProps)(MemoSection);
