// @flow
import * as React from 'react';
import { Theme as UWPThemeProvider, getTheme } from 'react-uwp/Theme';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    const { children } = this.props;
    console.log(this.props);
    return <React.Fragment> {children} </React.Fragment>;
  }
}
