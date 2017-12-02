import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import MoreIcon from 'material-ui/svg-icons/navigation/more-vert';

import './ChatList.css';

import Avatar01 from '../../img/avatar01.jpg';
import Avatar02 from '../../img/avatar02.jpg';
import Avatar03 from '../../img/avatar03.jpg';
import Avatar04 from '../../img/avatar04.jpg';

const chatListStyle = {
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

class ChatList extends Component {
  render() {
    return (
      <div>
        <Toolbar style={chatListStyle.toolbar} noGutter>
          <ToolbarGroup>
            <ToolbarTitle text="Chat" style={chatListStyle.toolbarTitle}/>
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
        <List style={chatListStyle.list}>
          <ListItem
            leftAvatar={<Avatar src={Avatar01}/>}
            primaryText="Sarah Townsend"
            secondaryText="Looks beautiful! I'm so excited!!!"
            secondaryTextLines={2}
            children={
              <div className="chat-list-item-timestamp">
                <span>11:28 AM</span>
              </div>
            }
          />
          <Divider inset/>
          <ListItem
            leftAvatar={<Avatar src={Avatar02}/>}
            primaryText="Tom Jones"
            secondaryText="You: Perfect, meet you at the open house around 3pm Saturday?"
            secondaryTextLines={2}
            children={
              <div className="chat-list-item-timestamp">
                <span>Yesterday</span>
              </div>
            }
          />
          <Divider inset/>
          <ListItem
            leftAvatar={<Avatar src={Avatar03}/>}
            primaryText="Eric Smith"
            secondaryText="See you there!"
            secondaryTextLines={2}
            children={
              <div className="chat-list-item-timestamp">
                <span>Tuesday</span>
              </div>
            }
          />
          <Divider inset/>
          <ListItem
            leftAvatar={<Avatar src={Avatar04}/>}
            primaryText="Martha Byrd"
            secondaryText="Video Call - 3 minutes 29 seconds"
            secondaryTextLines={2}
            children={
              <div className="chat-list-item-timestamp">
                <span>Jun 14</span>
              </div>
            }
          />
          <Divider inset/>
        </List>
      </div>
    );
  }
}

export default ChatList;
