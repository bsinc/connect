import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import SvgIcon from 'material-ui/SvgIcon';
import MoreIcon from 'material-ui/svg-icons/navigation/more-vert';
import ChevronDown from 'material-ui/svg-icons/navigation/expand-more';

import muiThemeable from 'material-ui/styles/muiThemeable';
import './Notes.css';

const notesStyle = {
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

const Notes = (props) => {
  return (
    <div className="notes-list">
      <Toolbar style={notesStyle.toolbar} noGutter>
        <ToolbarGroup>
          <ToolbarTitle text="My Notes" style={notesStyle.toolbarTitle}/>
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
      <List style={notesStyle.list}>
        <ListItem
          leftIcon={
            <SvgIcon style={notesStyle.listIcon} color={props.muiTheme.palette.noteColor}>
              <g>
                <path d="M15,38.5v-14a2.006,2.006,0,0,1,2-2H31a2.006,2.006,0,0,1,2,2v10l-6,6H17A2.006,2.006,0,0,1,15,38.5Zm9.82-.7H16.8V39h8.02V37.8Zm0-2.4H16.8v1.2h8.02V35.4Zm0-2.4H16.8v1.2h8.02V33Zm6.9-2.4H16.8v1.2H31.72V30.6Zm0-2.4H16.8v1.2H31.72V28.2Zm0-2.4H16.8V27H31.72V25.8Zm-.02,7.16H26V39Z" transform="translate(-12 -18)"/>
                <path d="M24,14.94c-.86,0-1.5-1.06-1.5-2.46S23.14,10,24,10s1.5,1.06,1.5,2.46S24.86,14.94,24,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S24.28,10.8,24,10.8Z" transform="translate(-18 -8)"/>
                <path d="M44,14.94c-.86,0-1.5-1.06-1.5-2.46S43.14,10,44,10s1.5,1.06,1.5,2.46S44.86,14.94,44,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S44.28,10.8,44,10.8Z" transform="translate(-34 -8)"/>
                <path d="M64,14.94c-.86,0-1.5-1.06-1.5-2.46S63.14,10,64,10s1.5,1.06,1.5,2.46S64.86,14.94,64,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S64.28,10.8,64,10.8Z" transform="translate(-50 -8)"/>
                <path d="M84,14.94c-.86,0-1.5-1.06-1.5-2.46S83.14,10,84,10s1.5,1.06,1.5,2.46S84.86,14.94,84,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S84.28,10.8,84,10.8Z" transform="translate(-66 -8)"/>
              </g>
            </SvgIcon>
          }
          primaryText="Sarah’s Wish List"
          secondaryText="June 29, 11:28 AM"
          rightIconButton={
            <IconButton>
              <ChevronDown color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          }
        />
        <Divider inset/>
        <ListItem
          leftIcon={
            <SvgIcon style={notesStyle.listIcon} color={props.muiTheme.palette.noteColor}>
              <g>
                <path d="M15,38.5v-14a2.006,2.006,0,0,1,2-2H31a2.006,2.006,0,0,1,2,2v10l-6,6H17A2.006,2.006,0,0,1,15,38.5Zm9.82-.7H16.8V39h8.02V37.8Zm0-2.4H16.8v1.2h8.02V35.4Zm0-2.4H16.8v1.2h8.02V33Zm6.9-2.4H16.8v1.2H31.72V30.6Zm0-2.4H16.8v1.2H31.72V28.2Zm0-2.4H16.8V27H31.72V25.8Zm-.02,7.16H26V39Z" transform="translate(-12 -18)"/>
                <path d="M24,14.94c-.86,0-1.5-1.06-1.5-2.46S23.14,10,24,10s1.5,1.06,1.5,2.46S24.86,14.94,24,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S24.28,10.8,24,10.8Z" transform="translate(-18 -8)"/>
                <path d="M44,14.94c-.86,0-1.5-1.06-1.5-2.46S43.14,10,44,10s1.5,1.06,1.5,2.46S44.86,14.94,44,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S44.28,10.8,44,10.8Z" transform="translate(-34 -8)"/>
                <path d="M64,14.94c-.86,0-1.5-1.06-1.5-2.46S63.14,10,64,10s1.5,1.06,1.5,2.46S64.86,14.94,64,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S64.28,10.8,64,10.8Z" transform="translate(-50 -8)"/>
                <path d="M84,14.94c-.86,0-1.5-1.06-1.5-2.46S83.14,10,84,10s1.5,1.06,1.5,2.46S84.86,14.94,84,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S84.28,10.8,84,10.8Z" transform="translate(-66 -8)"/>
              </g>
            </SvgIcon>
          }
          primaryText="To-Do This Week (Jun 18 - 24)"
          secondaryText="June 23, 3:01 PM"
          rightIconButton={
            <IconButton>
              <ChevronDown color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          }
        />
        <Divider inset/>
        <ListItem
          leftIcon={
            <SvgIcon style={notesStyle.listIcon} color={props.muiTheme.palette.noteColor}>
              <g>
                <path d="M15,38.5v-14a2.006,2.006,0,0,1,2-2H31a2.006,2.006,0,0,1,2,2v10l-6,6H17A2.006,2.006,0,0,1,15,38.5Zm9.82-.7H16.8V39h8.02V37.8Zm0-2.4H16.8v1.2h8.02V35.4Zm0-2.4H16.8v1.2h8.02V33Zm6.9-2.4H16.8v1.2H31.72V30.6Zm0-2.4H16.8v1.2H31.72V28.2Zm0-2.4H16.8V27H31.72V25.8Zm-.02,7.16H26V39Z" transform="translate(-12 -18)"/>
                <path d="M24,14.94c-.86,0-1.5-1.06-1.5-2.46S23.14,10,24,10s1.5,1.06,1.5,2.46S24.86,14.94,24,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S24.28,10.8,24,10.8Z" transform="translate(-18 -8)"/>
                <path d="M44,14.94c-.86,0-1.5-1.06-1.5-2.46S43.14,10,44,10s1.5,1.06,1.5,2.46S44.86,14.94,44,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S44.28,10.8,44,10.8Z" transform="translate(-34 -8)"/>
                <path d="M64,14.94c-.86,0-1.5-1.06-1.5-2.46S63.14,10,64,10s1.5,1.06,1.5,2.46S64.86,14.94,64,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S64.28,10.8,64,10.8Z" transform="translate(-50 -8)"/>
                <path d="M84,14.94c-.86,0-1.5-1.06-1.5-2.46S83.14,10,84,10s1.5,1.06,1.5,2.46S84.86,14.94,84,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S84.28,10.8,84,10.8Z" transform="translate(-66 -8)"/>
              </g>
            </SvgIcon>
          }
          primaryText="Open House Checklist"
          secondaryText="June 18, 5:39 PM"
          rightIconButton={
            <IconButton>
              <ChevronDown color={props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
          }
        />
        <Divider inset/>
        <ListItem
          leftIcon={
            <SvgIcon style={notesStyle.listIcon} color={props.muiTheme.palette.noteColor}>
              <g>
                <path d="M15,38.5v-14a2.006,2.006,0,0,1,2-2H31a2.006,2.006,0,0,1,2,2v10l-6,6H17A2.006,2.006,0,0,1,15,38.5Zm9.82-.7H16.8V39h8.02V37.8Zm0-2.4H16.8v1.2h8.02V35.4Zm0-2.4H16.8v1.2h8.02V33Zm6.9-2.4H16.8v1.2H31.72V30.6Zm0-2.4H16.8v1.2H31.72V28.2Zm0-2.4H16.8V27H31.72V25.8Zm-.02,7.16H26V39Z" transform="translate(-12 -18)"/>
                <path d="M24,14.94c-.86,0-1.5-1.06-1.5-2.46S23.14,10,24,10s1.5,1.06,1.5,2.46S24.86,14.94,24,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S24.28,10.8,24,10.8Z" transform="translate(-18 -8)"/>
                <path d="M44,14.94c-.86,0-1.5-1.06-1.5-2.46S43.14,10,44,10s1.5,1.06,1.5,2.46S44.86,14.94,44,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S44.28,10.8,44,10.8Z" transform="translate(-34 -8)"/>
                <path d="M64,14.94c-.86,0-1.5-1.06-1.5-2.46S63.14,10,64,10s1.5,1.06,1.5,2.46S64.86,14.94,64,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S64.28,10.8,64,10.8Z" transform="translate(-50 -8)"/>
                <path d="M84,14.94c-.86,0-1.5-1.06-1.5-2.46S83.14,10,84,10s1.5,1.06,1.5,2.46S84.86,14.94,84,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S84.28,10.8,84,10.8Z" transform="translate(-66 -8)"/>
              </g>
            </SvgIcon>
          }
          primaryText="Potential Clients List"
          secondaryText="June 12, 9:44 AM"
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

export default muiThemeable()(Notes);
