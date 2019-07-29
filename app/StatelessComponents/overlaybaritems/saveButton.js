
import React, { Component } from 'react';
import AppBarButton from "react-uwp/AppBarButton"

export default class SaveButton extends Component<Props> {
  render(){
    return(
      <AppBarButton label="Save snapshot" icon= "Save" labelPosition = "bottom"> </AppBarButton>
    )
  }
}
