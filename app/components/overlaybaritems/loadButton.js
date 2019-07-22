
import React, { Component } from 'react';
import AppBarButton from "react-uwp/AppBarButton"

export default class LoadButton extends Component<Props> {
  render(){
    let style = {'background-color': '#000'};
    return(
      <AppBarButton label="Load Snapshot" icon= "Download" labelPosition = "bottom" hoverStyle = {style}> </AppBarButton>
    )
  }
}
