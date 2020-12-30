import React from 'react';
import styled from "styled-components";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const AppTitle = styled(Typography)`
  color: ${props => props.theme.palette.primary.main};
`;

const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  border-bottom: 1px solid ${props => props.theme.palette.border};
  z-index: ${props => props.theme.zIndex.drawer + 1};
`;

export default class Header extends React.Component {
  render() {
    return (
      <StyledAppBar color="inherit">
        <Toolbar>
          <AppTitle variant="h5" component="h1">
            ToDoApp
          </AppTitle>
        </Toolbar>
      </StyledAppBar>
    )
  }
}
