import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import MoreIcon from 'material-ui/svg-icons/navigation/more-vert';
import ChevronDown from 'material-ui/svg-icons/navigation/expand-more';
import FolderIcon from 'material-ui/svg-icons/file/folder';
import FileIcon from 'material-ui/svg-icons/editor/insert-drive-file';

import muiThemeable from 'material-ui/styles/muiThemeable';
import './Drive.css';

import House05 from '../../img/realtor/slider/05.jpg';
import House06 from '../../img/realtor/slider/06.jpg';
import House07 from '../../img/realtor/slider/07.jpg';

const driveStyle = {
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
    maxHeight: 'calc(100vh - 120px)'
  },
  listIcon: {
    marginLeft: 20,
  },
  listAvatarContainerStyle: {
    height: 36,
    width: 36,
    top: 18,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 4
  },
  listAvatarStyle: {
    width: 'auto',
    borderRadius: 'none'
  }
};

const Drive = (props) => {
  return (
    <div className="drive-list">
      <Toolbar style={driveStyle.toolbar} noGutter>
        <ToolbarGroup>
          <ToolbarTitle text="My Files" style={driveStyle.toolbarTitle}/>
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
      <List style={driveStyle.list}>
        <ListItem
          leftIcon={<FolderIcon style={driveStyle.listIcon} color={props.muiTheme.palette.driveAccent1Color}/>}
          primaryText="Invoices"
          secondaryText="June 29, 2:43 PM"
          rightIconButton={
            <IconButton>
              <ChevronDown color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          }
        />
        <Divider inset/>
        <ListItem
          leftIcon={<FolderIcon style={driveStyle.listIcon} color={props.muiTheme.palette.driveAccent1Color}/>}
          primaryText="New Developments"
          secondaryText="June 25, 5:49 PM"
          rightIconButton={
            <IconButton>
              <ChevronDown color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          }
        />
        <Divider inset/>
        <ListItem
          leftIcon={<FolderIcon style={driveStyle.listIcon} color={props.muiTheme.palette.driveAccent1Color}/>}
          primaryText="#408 - 9861 Main St, Vancouver"
          secondaryText="June 16, 9:01 PM"
          rightIconButton={
            <IconButton>
              <ChevronDown color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          }
        />
        <Divider inset/>
        <ListItem
          leftIcon={<FolderIcon style={driveStyle.listIcon} color={props.muiTheme.palette.driveAccent1Color}/>}
          primaryText="5642 Commercial Dr, Vancouver"
          secondaryText="June 9, 10:58 AM"
          rightIconButton={
            <IconButton>
              <ChevronDown color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          }
        />
        <Divider inset/>
        <ListItem
          leftIcon={<FolderIcon style={driveStyle.listIcon} color={props.muiTheme.palette.driveAccent1Color}/>}
          primaryText="Client Details"
          secondaryText="June 6, 11:47 AM"
          rightIconButton={
            <IconButton>
              <ChevronDown color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          }
        />
        <Divider inset/>
        <ListItem
          leftIcon={<FolderIcon style={driveStyle.listIcon} color={props.muiTheme.palette.driveAccent1Color}/>}
          primaryText="16780 Fraser Highway, Surrey"
          secondaryText="June 2, 4:09 PM"
          rightIconButton={
            <IconButton>
              <ChevronDown color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          }
        />
        <Divider inset/>
        <ListItem
          leftIcon={<FileIcon style={driveStyle.listIcon} color={props.muiTheme.palette.driveColor}/>}
          primaryText="apartment_blueprint.pdf"
          secondaryText="June 26, 11:43 AM"
          rightIconButton={
            <IconButton>
              <ChevronDown color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          }
        />
        <Divider inset/>
        <ListItem
          leftAvatar={
            <div style={driveStyle.listAvatarContainerStyle}>
              <Avatar size={36} src={House05} style={driveStyle.listAvatarStyle}/>
            </div>
          }
          primaryText="bedroom01"
          secondaryText="June 17, 9:08 AM"
          rightIconButton={
            <IconButton>
              <ChevronDown color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          }
        />
        <Divider inset/>
        <ListItem
          leftAvatar={
            <div style={driveStyle.listAvatarContainerStyle}>
              <Avatar size={36} src={House06} style={driveStyle.listAvatarStyle}/>
            </div>
          }
          primaryText="bedroom02"
          secondaryText="June 17, 9:08 AM"
          rightIconButton={
            <IconButton>
              <ChevronDown color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          }
        />
        <Divider inset/>
        <ListItem
          leftIcon={<FileIcon style={driveStyle.listIcon} color={props.muiTheme.palette.driveColor}/>}
          primaryText="Client Wish List.pdf"
          secondaryText="June 14, 8:53 AM"
          rightIconButton={
            <IconButton>
              <ChevronDown color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          }
        />
        <Divider inset/>
        <ListItem
          leftAvatar={
            <div style={driveStyle.listAvatarContainerStyle}>
              <Avatar size={36} src={House07} style={driveStyle.listAvatarStyle}/>
            </div>
          }
          primaryText="bathroom-inspiration.png"
          secondaryText="June 10, 5:31 PM"
          rightIconButton={
            <IconButton>
              <ChevronDown color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          }
        />
        <Divider inset/>
        <ListItem
          leftIcon={<FileIcon style={driveStyle.listIcon} color={props.muiTheme.palette.driveColor}/>}
          primaryText="team_list"
          secondaryText="June 6, 11:49 AM"
          rightIconButton={
            <IconButton>
              <ChevronDown color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          }
        />
        <Divider inset/>
        <ListItem
          leftIcon={<FileIcon style={driveStyle.listIcon} color={props.muiTheme.palette.driveColor}/>}
          primaryText="10375483597439.pdf"
          secondaryText="June 2, 7:56 PM"
          rightIconButton={
            <IconButton>
              <ChevronDown color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          }
        />
        <Divider inset/>
      </List>
    </div>
  );
}

export default muiThemeable()(Drive);
