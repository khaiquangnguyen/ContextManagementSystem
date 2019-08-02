// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Memo from './Memo';
import {
  addTextMemo,
  addVoiceMemo,
  removeMemo
} from '../../actions/MemoActions';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

const Container = styled.section`
  display: block;
  width: 25vw;
  background: none;
  align-items: start;
  align-content: center;
  margin-right: 1vw;
  overflow: auto;
`;

class MemoSection extends Component {
  render() {
    const memos = [];
    const { props } = this;
    props.memos.forEach(memo => {
      memos.push(<Memo memo={memo} />);
    });
    return (
      <Container>
        <TextField label="With auto adjusting height" multiline autoAdjustHeight />

        <button
          type="submit"
          onClick={() => {
            props.addTextMemo('Project 1');
          }}
        >
          Click Me!
        </button>
        {memos}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    memos: state.memos
  };
}
export default connect(
  mapStateToProps,
  { addTextMemo, addVoiceMemo, removeMemo }
)(MemoSection);
