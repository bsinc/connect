import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Avatar from 'material-ui/Avatar';
import {Tabs, Tab} from 'material-ui/Tabs';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import SettingsIcon from 'material-ui/svg-icons/action/settings';

import MessengerSidebar from './components/MessengerSidebar/MessengerSidebar';
import ChatWindow from './components/ChatWindow/ChatWindow';
import BusinessProfile from './components/BusinessProfile/BusinessProfile';
import Feed from './components/Feed/Feed';
import PostDialog from './components/PostDialog/PostDialog';

import logo from './img/connect-logo.svg';
import AvatarExample from './img/realtor/realtor.jpg';

import './normalize.css';
import './App.css';

const muiTheme = getMuiTheme({
  fontFamily: 'Lato, Roboto, sans-serif',
  palette: {
    primary1Color: '#39B6D8',
    primary2Color: '#105996',
    driveColor: '#ff9800',
    driveAccent1Color: '#F57C00',
    accent1Color: '#00C853',
    noteColor: '#e65100',
    contactsColor: '#673ab7',
    secondary1TextColor: '#757577',
    errorColor: '#f44336'
  },
  appBar: {
    height: 56,
  },
});

const fabStyle = {
  position: 'absolute',
  top: 24,
  right: 72
};

const dialogStyle = {
  content: {
    width: 440
  },
  actionsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
};

const tabStyle = {
  fontWeight: 700
};

class App extends Component {
  state = {
    dialogOpen: false,
  };
  handleDialogOpen = () => {
    this.setState({dialogOpen: true});
  };
  handleDialogClose = () => {
    this.setState({dialogOpen: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Save"
        primary={true}
        onTouchTap={this.handleDialogClose}
      />,
      <FlatButton
        label="Publish"
        labelStyle={{ color: '#fff' }}
        backgroundColor="#00c853"
        onTouchTap={this.handleDialogClose}
      />,
    ];
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app-bar">
          <section>
            <img src={logo} alt="Vidao Connect Logo" height="36"/>
          </section>
          <section>
            <Tabs
              className="main-tabs"
              inkBarStyle={{
                background: '#fff'
              }}
              tabTemplateStyle={{ position: 'absolute', top: 56, left: 0 }}
              initialSelectedIndex={0}
            >
              
              <Tab label="Your Feed" buttonStyle={tabStyle}>
                <div className="main-tab-content">
                  <Feed/>
                </div>
              </Tab>
              <Tab label="Messenger" buttonStyle={tabStyle}>
                <div className="main-tab-content messenger-tab">
                  <MessengerSidebar/>
                  <ChatWindow/>
                </div>
              </Tab>
            </Tabs>
          </section>
          <section>
            <Avatar src={AvatarExample}/>
            <div className="settings-icon">
              <SettingsIcon color="#fff" style={{ height: 14, width: 14 }}/>
            </div>
          </section>
          <FloatingActionButton style={fabStyle} secondary onTouchTap={this.handleDialogOpen}>
            <AddIcon/>
          </FloatingActionButton>
          <Dialog
            actions={actions}
            modal={false}
            open={this.state.dialogOpen}
            onRequestClose={this.handleDialogClose}
            paperClassName="post-dialog"
            contentStyle={dialogStyle.content}
            actionsContainerStyle={dialogStyle.actionsContainer}
            autoScrollBodyContent
          >
            <PostDialog/>
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}
injectTapEventPlugin();
export default App;
