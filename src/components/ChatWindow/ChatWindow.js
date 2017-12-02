import React from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import SvgIcon from 'material-ui/SvgIcon';
import MoreIcon from 'material-ui/svg-icons/navigation/more-vert';
import VideoIcon from 'material-ui/svg-icons/av/videocam';
import VoiceIcon from 'material-ui/svg-icons/communication/call';

import ChatInput from '../ChatInput/ChatInput';

import muiThemeable from 'material-ui/styles/muiThemeable';
import './ChatWindow.css';

import House03 from '../../img/realtor/slider/03.jpg';
import Avatar01 from '../../img/avatar01.jpg';
import HouseFloorPlan from '../../img/house-floor-plan01.png';

const chatWindowStyle = {
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
  }
};

const ChatWindow = (props) => {
  return (
    <div className="chat-window">
      <Toolbar style={chatWindowStyle.toolbar} noGutter>
        <ToolbarGroup>
          <div className="avatar-container">
            <Avatar size={36} src={Avatar01}/>
            <div className="presence-bubble" style={{ backgroundColor: props.muiTheme.palette.accent1Color }}></div>
          </div>
          <div className="chat-window-toolbar-text">
            <p>Sarah Townsend</p>
            <p>Online Now</p>
          </div>
        </ToolbarGroup>
        <ToolbarGroup style={{ marginRight: 142 }}>
          <IconButton>
            <VideoIcon color={props.muiTheme.palette.primary1Color}/>
          </IconButton>
          <IconButton>
            <VoiceIcon color={props.muiTheme.palette.primary2Color}/>
          </IconButton>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <MoreIcon color="#757577"/>
              </IconButton>
            }
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Add Contacts to Chat" />
            <MenuItem primaryText="Mute Conversation" />
            <MenuItem primaryText="Delete Conversation" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
      <div className="chat-window-messages">
        <div className="message-container outgoing">
          <div className="message text-message">
            <p>Hi Sarah! Glad we had coffee earlier today, I’m excited to work with you! We can share notes, images, and ideas using this app, it’ll be a great tool for us. Do you have any ideas or photos to send me? I can start a wish list for you.</p>
            <div className="message-info">
              <span>11:28 AM</span>
              <div className="message-read"></div>
            </div>
          </div>
        </div>
        <div className="message-container incoming">
          <div className="message text-message">
            <p>I’m looking forward to working with you as well, my husband and I cannot wait to buy our first home together. I only have this one photo for now, I’ll be doing some googling tonight to find more.</p>
            <div className="message-info">
              <span>11:28 AM</span>
            </div>
          </div>
        </div>
        <div className="message-container incoming">
          <div className="message photo-message">
            <div className="photo-message-image">
              <img src={House03} alt=""/>
            </div>
            <div className="message-info">
              <span>11:28 AM</span>
            </div>
          </div>
        </div>
        <div className="message-container outgoing">
          <div className="message text-message">
            <p>Awesome, can I give you a quick call?</p>
            <div className="message-info">
              <span>11:28 AM</span>
              <div className="message-read"></div>
            </div>
          </div>
        </div>
        <div className="message-container mutual">
          <div className="message call-message">
            <div className="message-icon-container" style={{ background: props.muiTheme.palette.primary2Color }}>
              <VoiceIcon color="#fff"/>
            </div>
            Voice Call - 4 minutes and 28 seconds.
          </div>
        </div>
        <div className="message-container outgoing">
          <div className="message note-message">
            <div className="message-icon-container">
              <SvgIcon color={props.muiTheme.palette.noteColor} style={{ height: 48, width: 48 }}>
                <g>
                  <path d="M15,38.5v-14a2.006,2.006,0,0,1,2-2H31a2.006,2.006,0,0,1,2,2v10l-6,6H17A2.006,2.006,0,0,1,15,38.5Zm9.82-.7H16.8V39h8.02V37.8Zm0-2.4H16.8v1.2h8.02V35.4Zm0-2.4H16.8v1.2h8.02V33Zm6.9-2.4H16.8v1.2H31.72V30.6Zm0-2.4H16.8v1.2H31.72V28.2Zm0-2.4H16.8V27H31.72V25.8Zm-.02,7.16H26V39Z" transform="translate(-12 -18)"/>
                  <path d="M24,14.94c-.86,0-1.5-1.06-1.5-2.46S23.14,10,24,10s1.5,1.06,1.5,2.46S24.86,14.94,24,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S24.28,10.8,24,10.8Z" transform="translate(-18 -8)"/>
                  <path d="M44,14.94c-.86,0-1.5-1.06-1.5-2.46S43.14,10,44,10s1.5,1.06,1.5,2.46S44.86,14.94,44,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S44.28,10.8,44,10.8Z" transform="translate(-34 -8)"/>
                  <path d="M64,14.94c-.86,0-1.5-1.06-1.5-2.46S63.14,10,64,10s1.5,1.06,1.5,2.46S64.86,14.94,64,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S64.28,10.8,64,10.8Z" transform="translate(-50 -8)"/>
                  <path d="M84,14.94c-.86,0-1.5-1.06-1.5-2.46S83.14,10,84,10s1.5,1.06,1.5,2.46S84.86,14.94,84,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S84.28,10.8,84,10.8Z" transform="translate(-66 -8)"/>
                </g>
              </SvgIcon>
            </div>
            <p>Sarah’s Wish List</p>
            <div className="message-info">
              <span>11:28 AM</span>
              <div className="message-read"></div>
            </div>
          </div>
        </div>
        <div className="message-container incoming">
          <div className="message text-message">
            <p>Looks great. I also want a decent sized backyard and patio area. Oh and my husband just told me he will need a bigger office than we originally thought.</p>
            <div className="message-info">
              <span>11:28 AM</span>
            </div>
          </div>
        </div>
        <div className="message-container outgoing">
          <div className="message text-message">
            <p>I will add those points in! Here is the first level floor plan, what do you think?</p>
            <div className="message-info">
              <span>11:28 AM</span>
              <div className="message-read"></div>
            </div>
          </div>
        </div>
        <div className="message-container outgoing">
          <div className="message photo-message">
            <div className="photo-message-image">
              <img src={HouseFloorPlan} alt=""/>
            </div>
            <div className="message-info">
              <span>11:28 AM</span>
              <div className="message-read"></div>
            </div>
          </div>
        </div>
        <div className="message-container incoming">
          <div className="message text-message">
            <p>Looks beautiful! I’m so excited!!!</p>
            <div className="message-info">
              <span>11:28 AM</span>
            </div>
          </div>
        </div>
      </div>
      <ChatInput/>
    </div>
  );
}

export default muiThemeable()(ChatWindow);
