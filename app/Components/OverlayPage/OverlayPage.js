// @flow
import React, { Component } from 'react';
import OverlayBar from '../../StatelessComponents/OverlayBar';

type Props = {};
export default class Overlay extends Component<Props> {
  props: Props;

  render() {
    return <OverlayBar />;
  }
}
