import React, { Component } from 'react';
import OverlayBar from '../StatelessComponents/OverlayBar';
import { Props } from './OverlayPage/OverlayPage';

export default class Overlay extends Component<Props> {
  props: Props;
  render() {
    return <OverlayBar />;
  }
}
