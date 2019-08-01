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
    return (
      <React.Fragment> {children} </React.Fragment>

      // <UWPThemeProvider
      //   theme={getTheme({
      //     themeName: 'dark', // set custom theme
      //     accent: '#0078D7', // set accent color
      //     useFluentDesign: false, // sure you want use new fluent design.
      //     desktopBackgroundImage: 'background.jpg' // set global desktop background image
      //   })}
      // >
      // </UWPThemeProvider>
    );
  }
}
