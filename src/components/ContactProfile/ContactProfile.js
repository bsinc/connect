import React from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import SvgIcon from 'material-ui/SvgIcon';
import LocationIcon from 'material-ui/svg-icons/maps/place';
import CallIcon from 'material-ui/svg-icons/communication/call';
import MailIcon from 'material-ui/svg-icons/content/mail';
import DateIcon from 'material-ui/svg-icons/action/date-range.js';

import muiThemeable from 'material-ui/styles/muiThemeable';
import './ContactProfile.css';

import Avatar01 from '../../img/avatar01.jpg';

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

const ContactProfile = (props) => {
  return (
    <div className="contact-container" style={ props.contactProfileHidden ? contactProfileStyle.hidden : null }>
      <div className="contact-header">
        <Avatar src={Avatar01} size={100} className="contact-header-avatar"/>
        <h1>Sarah Townsend</h1>
      </div>
      <div className="contact-body">
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
  );
}

export default muiThemeable()(ContactProfile);
