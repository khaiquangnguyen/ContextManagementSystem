
import React, { Component } from 'react';
import AppBarButton from "react-uwp/AppBarButton"

export default class RecordButton extends Component<Props> {
  render(){
    return(
      <AppBarButton label="Voice Memo" icon= "Record" labelPosition = "bottom"> </AppBarButton>
    )
  }
}
