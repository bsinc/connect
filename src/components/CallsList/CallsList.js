import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import MoreIcon from 'material-ui/svg-icons/navigation/more-vert';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';
import CallOutgoing from 'material-ui/svg-icons/communication/call-made';
import CallIncoming from 'material-ui/svg-icons/communication/call-received';
import CallMissed from 'material-ui/svg-icons/communication/call-missed';

import muiThemeable from 'material-ui/styles/muiThemeable';
import './CallsList.css';

import Avatar01 from '../../img/avatar01.jpg';
import Avatar02 from '../../img/avatar02.jpg';
import Avatar03 from '../../img/avatar03.jpg';
import Avatar04 from '../../img/avatar04.jpg';

const callsListStyle = {
  toolbar: {
    height: 56,
    paddingLeft: 16,
    background: '#fff',
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.1)'
  },
  toolbarTitle: {
    color: '#000'
  },
  list: {
    paddingTop: 0,
    paddingBottom: 8,
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 112px)'
  }
};

const CallsList = (props) => {
  return (
    <div className="calls-list">
      <Toolbar style={callsListStyle.toolbar} noGutter>
        <ToolbarGroup>
          <ToolbarTitle text="Calls" style={callsListStyle.toolbarTitle}/>
        </ToolbarGroup>
        <ToolbarGroup>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <MoreIcon color="#757577"/>
              </IconButton>
            }
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Select" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
      <List style={callsListStyle.list}>
        <ListItem
          leftAvatar={<Avatar src={Avatar01}/>}
          primaryText="Sarah Townsend"
          secondaryText="June 29, 2:14 PM"
          rightIconButton={
            <IconButton>
              <InfoIcon color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          }
          children={
            <CallOutgoing color={props.muiTheme.palette.primary1Color} className="call-list-type-icon"/>
          }
        />
        <Divider inset/>
        <ListItem
          leftAvatar={<Avatar src={Avatar03}/>}
          primaryText="Eric Smith"
          secondaryText="June 14, 11:04 AM"
          rightIconButton={
            <IconButton>
              <InfoIcon color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          }
          children={
            <CallIncoming color={props.muiTheme.palette.accent1Color} className="call-list-type-icon"/>
          }
        />
        <Divider inset/>
        <ListItem
          leftAvatar={<Avatar src={Avatar03}/>}
          primaryText="Eric Smith"
          secondaryText="June 14, 10:58 AM"
          rightIconButton={
            <IconButton>
              <InfoIcon color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          }
          children={
            <CallMissed color={props.muiTheme.palette.errorColor} className="call-list-type-icon"/>
          }
        />
        <Divider inset/>
        <ListItem
          leftAvatar={<Avatar src={Avatar04}/>}
          primaryText="Martha Byrd"
          secondaryText="June 8, 8:07 AM"
          rightIconButton={
            <IconButton>
              <InfoIcon color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          }
          children={
            <CallIncoming color={props.muiTheme.palette.accent1Color} className="call-list-type-icon"/>
          }
        />
        <Divider inset/>
        <ListItem
          leftAvatar={<Avatar src={Avatar02}/>}
          primaryText="Tom Jones"
          secondaryText="June 7, 12:45 PM"
          rightIconButton={
            <IconButton>
              <InfoIcon color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          }
          children={
            <CallIncoming color={props.muiTheme.palette.accent1Color} className="call-list-type-icon"/>
          }
        />
        <Divider inset/>
        <ListItem
          leftAvatar={<Avatar src={Avatar01}/>}
          primaryText="Sarah Townsend"
          secondaryText="June 3, 3:39 PM"
          rightIconButton={
            <IconButton>
              <InfoIcon color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          }
          children={
            <CallOutgoing color={props.muiTheme.palette.primary1Color} className="call-list-type-icon"/>
          }
        />
        <Divider inset/>
        <ListItem
          leftAvatar={<Avatar src={Avatar04}/>}
          primaryText="Martha Byrd"
          secondaryText="May 28, 6:48 PM"
          rightIconButton={
            <IconButton>
              <InfoIcon color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          }
          children={
            <CallMissed color={props.muiTheme.palette.errorColor} className="call-list-type-icon"/>
          }
        />
        <Divider inset/>
      </List>
    </div>
  );
}

export default muiThemeable()(CallsList);
