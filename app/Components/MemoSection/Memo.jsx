// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import dateFormat from 'dateformat';
import { connect } from 'react-redux';
import { editMemo } from '../../actions/MemoActions';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

const Container = styled.div`
  background-color: #303030;
  display: inline;
  width: 24vw;
  height: 8vw;
  margin: 0.5vw;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
`;
const ControlContainer = styled.div`
  width: 3vw;
  height: 7vw;
  margin: 0.5vw;
  padding: 0;
  background: none;
  display: flex;
  flex-flow: column nowrap;
`;

const ContentContainer = styled.div`
  width: 17vw;
  height: 7vw;
  margin: 0.5vw;
  padding: 0;
  background: none;
  display: block;
`;

const Content = styled.div`
  width: 17vw;
  height: 6vw;
  background: none;
  font-size: 15px;
  border: none;
  resize: none;
  font-family: 'Segoe UI';
  overflow-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const MetaData = styled.div`
  width: 17vw;
  height: 1vw;
  margin: 0;
  padding: 0;
  background: none;
  font-size: 12px;
  color: #7b7b7b;
`;

class Memo extends Component {
  render() {
    const { props } = this;
    const { memo } = props;
    const { editMemo } = props;

    const dateString = dateFormat(memo.date);
    console.log(editMemo);
    return (
      <Container style={{ boxShadow: Depths.depth4 }}>
        <ControlContainer />
        <ContentContainer>
          <Content
            // defaultValue={memo.text}
            // onChange={e => {
            //   editMemo(memo.id, e.target.value);
            // }}
          >
            {memo.text}
          </Content>
          <MetaData>{dateString}</MetaData>
        </ContentContainer>
      </Container>
    );
  }
}

export default connect(
  null,
  { editMemo }
)(Memo);
