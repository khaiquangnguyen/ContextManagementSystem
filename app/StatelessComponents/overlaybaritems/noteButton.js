
import React, { Component } from 'react';
import AppBarButton from "react-uwp/AppBarButton"

export default class NoteButton extends Component<Props> {
  render(){
    return(
      <AppBarButton label="Memo" icon= "QuickNote" labelPosition = "bottom"> </AppBarButton>
    )
  }
}
