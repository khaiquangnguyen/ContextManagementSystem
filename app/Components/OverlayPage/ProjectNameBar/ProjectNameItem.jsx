// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import dateFormat from 'dateformat';
import { connect } from 'react-redux';
import { editProjectName } from '../../../actions/ProjectNamesActions';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin: 1vw;
  margin-top: 0.2vw;
  margin-bottom: 0.2vw;
  width: 10vw;
  height: 2vw;
  padding: 0;
  font-size: 15px;
  overflow: hidden;
  white-space: nowrap;
`;

class ProjectNameItem extends Component {
  render() {
    const { props } = this;
    const { name } = props;
    const { editProjectName } = props;
    return <Container>{name}</Container>;
  }
}

export default connect(
  null,
  { editProjectName }
)(ProjectNameItem);
