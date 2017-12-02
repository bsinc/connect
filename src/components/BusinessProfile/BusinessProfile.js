import React from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import SvgIcon from 'material-ui/SvgIcon';
import LocationIcon from 'material-ui/svg-icons/maps/place';
import CallIcon from 'material-ui/svg-icons/communication/call';
import StarIcon from 'material-ui/svg-icons/toggle/star';
import StarOutlineIcon from 'material-ui/svg-icons/toggle/star-border';

import muiThemeable from 'material-ui/styles/muiThemeable';
import './BusinessProfile.css';

import AvatarExample from '../../img/realtor/realtor.jpg';

const businessProfileStyle = {
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
  }
};

const BusinessProfile = (props) => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <Avatar src={AvatarExample} size={100} className="profile-header-avatar"/>
        <h1>Amanda Peterson - Realtor</h1>
      </div>
      <div className="profile-body">
        <div className="profile-subheader">
          <span>284 Followers</span>
          <span className="profile-subheader-dot"></span>
          <div className="profile-subheader-rating">
            <StarIcon style={businessProfileStyle.ratingIcon}/>
            <StarIcon style={businessProfileStyle.ratingIcon}/>
            <StarIcon style={businessProfileStyle.ratingIcon}/>
            <StarIcon style={businessProfileStyle.ratingIcon}/>
            <StarOutlineIcon style={businessProfileStyle.ratingIcon}/>
          </div>
        </div>
        <div className="profile-section">
          <div className="subheader">Description</div>
          <p>
            <em>Search. See. Love.</em>
            <br/><br/>
            Passionate Realtor and Investor in South Surrey/ White Rock/ Langley with a background in Construction Management.  Love the real estate industry and work hard for my clients.
          </p>
        </div>
        <div className="profile-section">
          <div className="subheader">Category</div>
          <div className="profile-category-container">
            <Chip
              backgroundColor={props.muiTheme.palette.primary1Color}
              style={businessProfileStyle.chip}
              labelColor="#fff"
              labelStyle={businessProfileStyle.chipLabel}
            >
              Home
            </Chip>
            <Chip
              backgroundColor={props.muiTheme.palette.primary1Color}
              style={businessProfileStyle.chip}
              labelColor="#fff"
              labelStyle={businessProfileStyle.chipLabel}
            >
              Service
            </Chip>
          </div>
        </div>
        <div className="profile-section">
          <div className="subheader">Contact Information</div>
          <Divider/>
          <ListItem
            leftIcon={<LocationIcon style={{ top: 4 }}/>}
            primaryText="8820 120 St, Surrey, BC V3V 4B4"
            style={businessProfileStyle.listItem}
            disabled
          />
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.9528594559097!2d-122.89135370509129!3d49.163503004393114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9081079397f%3A0x60606845a025e491!2s8820+120+St%2C+Surrey%2C+BC+V3V+4B4!5e0!3m2!1sen!2sca!4v1498684925179" width="344" height="300" frameBorder="0" title="Profile Map" style={{ border: 0 }} allowFullScreen></iframe>
          <ListItem
            leftIcon={
              <SvgIcon style={{ top: 4 }}>
                <g>
                  <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </g>
              </SvgIcon>
            }
            primaryText="amandapetersonrealestate.com"
            style={businessProfileStyle.listItem}
            disabled
          />
          <Divider inset/>
          <ListItem
            leftIcon={<CallIcon style={{ top: 4 }}/>}
            primaryText="(604) 555-7832"
            style={businessProfileStyle.listItem}
            disabled
          />
          <Divider inset/>
          <ListItem
            leftIcon={
              <SvgIcon>
                <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
              </SvgIcon>
            }
            primaryText="7AM - 9PM"
            primaryTogglesNestedList
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Monday"
                disabled
              />,
              <ListItem
                key={2}
                primaryText="Tuesday"
                disabled
              />,
              <ListItem
                key={3}
                primaryText="Wednesday"
                disabled
              />,
              <ListItem
                key={4}
                primaryText="Thursday"
                disabled
              />,
              <ListItem
                key={5}
                primaryText="Friday"
                disabled
              />,
              <ListItem
                key={6}
                primaryText="Saturday"
                disabled
              />,
              <ListItem
                key={7}
                primaryText="Sunday"
                disabled
              />,
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default muiThemeable()(BusinessProfile);
