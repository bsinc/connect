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
import BackArrow from 'material-ui/svg-icons/navigation/arrow-back';
import LocationIcon from 'material-ui/svg-icons/maps/place';
import CallIcon from 'material-ui/svg-icons/communication/call';
import MailIcon from 'material-ui/svg-icons/content/mail';
import DateIcon from 'material-ui/svg-icons/action/date-range.js';

import muiThemeable from 'material-ui/styles/muiThemeable';
import './ContactsList.css';

import Avatar01 from '../../img/avatar01.jpg';
import Avatar02 from '../../img/avatar02.jpg';
import Avatar03 from '../../img/avatar03.jpg';
import Avatar04 from '../../img/avatar04.jpg';

const contactsListStyle = {
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

const contactProfileStyle = {
  ratingIcon: {
    height: 16,
    width: 16,
    color: '#39b6d8'
  },
  chip: {
    marginRight: 8
  },
  chipLabel: {
    textTransform: 'uppercase'
  },
  listItem: {
    paddingTop: 20,
    paddingBottom: 20
  },
  hidden: {
    display: 'none'
  }
};

class ContactsList extends React.Component {
  state = {isHidden: true};
  handleProfileOpen = () => {
    this.setState({isHidden: false});
  }
  handleProfileClose = () => {
    this.setState({isHidden: true});
  }
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <Toolbar style={contactsListStyle.toolbar} noGutter>
          <ToolbarGroup>
            <ToolbarTitle text="Contacts" style={contactsListStyle.toolbarTitle}/>
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
        <List style={contactsListStyle.list}>
          <ListItem
            leftAvatar={
              <div className="avatar-container">
                <Avatar src={Avatar03}/>
                <div className="contacts-list-presence-bubble" style={{ backgroundColor: this.props.muiTheme.palette.accent1Color }}></div>
              </div>
            }
            primaryText="Eric Smith"
            secondaryText="eric, USA"
            rightIcon={<InfoIcon color={this.props.muiTheme.palette.secondary1TextColor}/>}
          />
          <Divider inset/>
          <ListItem
            leftAvatar={
              <div className="avatar-container">
                <Avatar src={Avatar04}/>
                <div className="contacts-list-presence-bubble" style={{ backgroundColor: this.props.muiTheme.palette.accent1Color }}></div>
              </div>
            }
            primaryText="Martha Byrd"
            secondaryText="martha.byrd, Canada"
            rightIcon={<InfoIcon color={this.props.muiTheme.palette.secondary1TextColor}/>}
          />
          <Divider inset/>
          <ListItem
            leftAvatar={
              <div className="avatar-container">
                <Avatar src={Avatar01}/>
                <div className="contacts-list-presence-bubble" style={{ backgroundColor: this.props.muiTheme.palette.accent1Color }}></div>
              </div>
            }
            primaryText="Sarah Townsend"
            secondaryText="sarah.townsend, Canada"
            rightIcon={<InfoIcon color={this.props.muiTheme.palette.secondary1TextColor}/>}
            onTouchTap={this.handleProfileOpen}
          />
          <Divider inset/>
          <ListItem
            leftAvatar={
              <div className="avatar-container">
                <Avatar src={Avatar02}/>
                <div className="contacts-list-presence-bubble" style={{ backgroundColor: this.props.muiTheme.palette.accent1Color }}></div>
              </div>
            }
            primaryText="Tom Jones"
            secondaryText="tjones, United Kingdom"
            rightIcon={<InfoIcon color={this.props.muiTheme.palette.secondary1TextColor}/>}
          />
          <Divider inset/>
        </List>


        <div className="contact-container" style={ this.state.isHidden ? contactProfileStyle.hidden : null }>
          <div className="contact-header">
            <IconButton className="back-btn" onTouchTap={this.handleProfileClose}>
              <BackArrow color={this.props.muiTheme.palette.secondary1TextColor}/>
            </IconButton>
            <Avatar src={Avatar01} size={80} className="contact-header-avatar"/>
            <h1>Sarah Townsend</h1>
          </div>
          <div className="contact-body">
            <Divider/>
            <div className="contact-section">
              <div className="subheader">Contact Information</div>
              <Divider/>
              <ListItem
                leftIcon={<LocationIcon style={{ top: 4 }}/>}
                primaryText="8820 120 St, Surrey, BC V3V 4B4"
                style={contactProfileStyle.listItem}
                disabled
              />
              <Divider inset/>
              <ListItem
                leftIcon={<MailIcon style={{ top: 4 }}/>}
                primaryText="sarah.townsend@gmail.com"
                style={contactProfileStyle.listItem}
                disabled
              />
              <Divider inset/>
              <ListItem
                leftIcon={<CallIcon style={{ top: 4 }}/>}
                primaryText="(604) 555-7832"
                style={contactProfileStyle.listItem}
                disabled
              />
            </div>
            <div className="contact-section">
              <div className="subheader">Dates</div>
              <Divider/>
              <ListItem
                leftIcon={<DateIcon/>}
                primaryText="August 10, 2017"
                secondaryText="Important Meeting"
                style={contactProfileStyle.listItem}
                disabled
              />
              <Divider inset/>
              <ListItem
                leftIcon={<DateIcon/>}
                primaryText="August 16, 2017"
                secondaryText="Final Signing of Papers"
                style={contactProfileStyle.listItem}
                disabled
              />
            </div>
            <div className="contact-section">
              <div className="subheader">Notes</div>
              <Divider/>
              <textarea placeholder="Enter notes about this contact here"></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default muiThemeable()(ContactsList);
