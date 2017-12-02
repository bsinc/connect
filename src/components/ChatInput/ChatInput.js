import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import PlusIcon from 'material-ui/svg-icons/content/add';
import ImageIcon from 'material-ui/svg-icons/image/image';
import MicIcon from 'material-ui/svg-icons/av/mic';

import muiThemeable from 'material-ui/styles/muiThemeable';
import './ChatInput.css';

const ChatInput = (props) => {
  return (
    <div className="chat-input-container">
      <div className="chat-input">
        <div className="chat-input-inner">
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <PlusIcon color={props.muiTheme.palette.secondary1TextColor}/>
              </IconButton>
            }
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
          >
            <MenuItem primaryText="Upload a file"/>
            <MenuItem primaryText="Start a new note"/>
            <MenuItem primaryText="Take a photo"/>
          </IconMenu>
          <TextField
            hintText="Type a message..."
            fullWidth
            multiLine
            rowsMax={5}
            underlineShow={false}
            style={{ flex: 1 }}
          />
        </div>
        <div>
          <IconButton touch={true}>
            <ImageIcon color={props.muiTheme.palette.secondary1TextColor}/>
          </IconButton>
          <IconButton touch={true}>
            <MicIcon color={props.muiTheme.palette.secondary1TextColor}/>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default muiThemeable()(ChatInput);
