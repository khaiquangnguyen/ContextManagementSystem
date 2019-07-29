
import React, { Component } from 'react';
import AppBarButton from "react-uwp/AppBarButton"

export default class AccessAppButton extends Component<Props> {
  render(){
    return(
      <AppBarButton label="Main App" icon= "AppIconDefault" labelPosition = "bottom"> </AppBarButton>
    )
  }
}
