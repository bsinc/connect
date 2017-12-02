import React from 'react';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import SvgIcon from 'material-ui/SvgIcon';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import PhotoIcon from 'material-ui/svg-icons/image/image';
import LocationIcon from 'material-ui/svg-icons/maps/place';
import AddIcon from 'material-ui/svg-icons/content/add';

import muiThemeable from 'material-ui/styles/muiThemeable';
import './PostDialog.css';

import FacebookIcon from '../../img/social/facebook.png';
import TwitterIcon from '../../img/social/twitter.png';
import InstagramIcon from '../../img/social/instagram.png';
import LinkedInIcon from '../../img/social/linkedin.png';
import PinterestIcon from '../../img/social/pinterest.png';

const postDialogStyle = {
  headerTextField: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
    width: 408,
    fontSize: 24,
    color: '#fff'
  },
  underlineStyle: {
    borderColor: 'rgba(255,255,255,.8)'
  },
  underlineFocusStyle: {
    borderColor: '#fff'
  },
  headerTextFieldHint: {
    color: 'rgba(255,255,255,.8)'
  },
  headerTextFieldStyle: {
    color: '#fff'
  }
}

const PostDialog = (props) => {
  return (
    <div className="post-dialog-inner">
      <div className="post-dialog-header">
        <IconButton><CloseIcon color="#fff"/></IconButton>
        <TextField
          hintText="Post Title"
          underlineStyle={postDialogStyle.underlineStyle}
          underlineFocusStyle={postDialogStyle.underlineFocusStyle}
          style={postDialogStyle.headerTextField}
          hintStyle={postDialogStyle.headerTextFieldHint}
          inputStyle={postDialogStyle.headerTextFieldStyle}
        />
        <div className="media-button">
          <IconButton><PhotoIcon color="#fff"/></IconButton>
        </div>
      </div>
      <div className="post-dialog-body">
        <TextField
          hintText="Write your post here"
          fullWidth
          multiLine
          rowsMax={6}
          style={{ marginBottom: 16 }}
        />
        <ListItem
          leftIcon={
            <SvgIcon color={props.muiTheme.palette.secondary1TextColor}>
              <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
            </SvgIcon>
          }
          primaryText="Add Date & Time (optional)"
        />
        <Divider inset/>
        <ListItem
          leftIcon={
            <LocationIcon color={props.muiTheme.palette.secondary1TextColor}/>
          }
          primaryText="Add Location (optional)"
        />
        <Divider inset/>
        <Subheader style={{ marginTop: 16, paddingLeft: 0 }}>Share</Subheader>
        <Divider/>
        <div className="post-dialog-share-container">
          <div className="post-dialog-share-button">
            <img src={FacebookIcon} alt=""/>
            <span>Facebook</span>
          </div>
          <div className="post-dialog-share-button">
            <img src={TwitterIcon} alt=""/>
            <span>Twitter</span>
          </div>
          <div className="post-dialog-share-button">
            <img src={InstagramIcon} alt=""/>
            <span>Instagram</span>
          </div>
          <div className="post-dialog-share-button">
            <img src={LinkedInIcon} alt=""/>
            <span>LinkedIn</span>
          </div>
          <div className="post-dialog-share-button">
            <img src={PinterestIcon} alt=""/>
            <span>Pinterest</span>
          </div>
          <div className="post-dialog-share-button">
            <div className="post-dialog-add-button">
              <AddIcon color="#fff"/>
            </div>
            <span>Add...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default muiThemeable()(PostDialog);
