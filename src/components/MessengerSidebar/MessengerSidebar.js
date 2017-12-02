import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SvgIcon from 'material-ui/SvgIcon';
import ContactsIcon from 'material-ui/svg-icons/social/people';

import ChatList from '../ChatList/ChatList';
import ContactsList from '../ContactsList/ContactsList';
import CallsList from '../CallsList/CallsList';
import Drive from '../Drive/Drive';
import Notes from '../Notes/Notes';

import muiThemeable from 'material-ui/styles/muiThemeable';
import './MessengerSidebar.css';

const tabItemContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: 48,
  background: '#F2F2F4'
};

const tabButtonStyle = {
  width: 48,
  height: 56
}

const handleChange = (value) => {
  document.getElementsByClassName('tab-active')[0].classList.remove('tab-active');
  document.getElementsByClassName('tab' + value)[0].classList.add('tab-active');
};

const MessengerSidebar = (props) => {
  return (
    <div className="messenger-sidebar">
      <Tabs
        className="messenger-tabs"
        tabItemContainerStyle={tabItemContainerStyle}
        inkBarStyle={{
          display: 'none'
        }}
        initialSelectedIndex={0}
        onChange={handleChange}
      >
        <Tab
          icon={
            <SvgIcon color={props.muiTheme.palette.accent1Color}>
              <path d="M15.1,14v2c0,1.1-1,1.9-2.1,1.9H8L5,21v-3.1h-1c-1.1,0-2.1-0.8-2.1-1.9v-6c0-1.1,1-2.2,2.1-2.2h3.8V14L15.1,14z M22.2,4.9 v6c0,1.1-1,1.9-2.1,1.9h-1V16l-3-3.2H8.9V4.9C8.9,3.7,9.9,3,11,3h9.1C21.2,3,22.2,3.7,22.2,4.9z" />
            </SvgIcon>
          }
          buttonStyle={tabButtonStyle}
          className="tab0 tab-active"
          value={0}
        >
          <ChatList/>
        </Tab>
        <Tab
          icon={
            <ContactsIcon color={props.muiTheme.palette.contactsColor}/>
          }
          buttonStyle={tabButtonStyle}
          className="tab1"
          value={1}
        >
          <ContactsList/>
        </Tab>
        <Tab
          icon={
            <SvgIcon color={props.muiTheme.palette.primary1Color}>
              <g>
                <path d="M0,2.751V2.8A2.893,2.893,0,0,0,2.9,5.7.1.1,0,0,0,3,5.6V0H2.9A2.831,2.831,0,0,0,0,2.751Z" transform="translate(0 2.006)"/>
                <path d="M86.075,20.77V13.407c.1-1.17-1.268-1.731-2.414-.975L82.1,13.5v7.216l1.463,1.024C84.514,22.4,86.075,22.037,86.075,20.77Z" transform="translate(-62.08 -7.139)"/>
                <path d="M28.174,0H15.4a.1.1,0,0,0-.1.1V12.775a2.841,2.841,0,0,0,2.8,2.9H24l3.585,3.584a.193.193,0,0,0,.268-.024.09.09,0,0,0,.024-.073V15.676h.1a2.905,2.905,0,0,0,2.975-2.8V2.462A2.857,2.857,0,0,0,28.174,0ZM24.443,11a1.435,1.435,0,0,1-1.366.9,1.524,1.524,0,0,1-1.366-.9L18.981,4.145h1.1a1.526,1.526,0,0,1,1.439,1L23.1,9.362l1.585-4.218A1.506,1.506,0,0,1,26.1,4.169h1.122Z" transform="translate(-11.568 2.001)"/>
              </g>
            </SvgIcon>
          }
          buttonStyle={tabButtonStyle}
          className="tab2"
          value={2}
        >
          <CallsList/>
        </Tab>
        <Tab
          icon={
            <SvgIcon color={props.muiTheme.palette.driveColor}>
              <path d="M22,15l-0.7,4.3c-0.1,0.6-0.6,1.3-1.3,1.3H4.1c-0.6,0-1.3 -0.6-1.3-1.3L2,15c-0.1-0.6,0-1.7,0.2-2.1l3.4-8.3 c0.2-0.6,1-1.1,1.7-1.1h9.1c0.6,0,1.4,0.5,1.7,1.1l3.4,8.3C21.8,13.5,22.1,14.4,22,15z M18.8,14.4h-14c-0.6,0-1.1,0.6-1,1.3 L4,17.3c0.2,0.7,0.6,1.3,1.3,1.3h13c0.6,0,1.1-0.4,1.3-1.1l0.2-1.8C19.8,15,19.5,14.4,18.8,14.4z"/>
            </SvgIcon>
          }
          buttonStyle={tabButtonStyle}
          className="tab3"
          value={3}
        >
          <Drive/>
        </Tab>
        <Tab
          icon={
            <SvgIcon color={props.muiTheme.palette.noteColor}>
              <g>
                <path d="M15,38.5v-14a2.006,2.006,0,0,1,2-2H31a2.006,2.006,0,0,1,2,2v10l-6,6H17A2.006,2.006,0,0,1,15,38.5Zm9.82-.7H16.8V39h8.02V37.8Zm0-2.4H16.8v1.2h8.02V35.4Zm0-2.4H16.8v1.2h8.02V33Zm6.9-2.4H16.8v1.2H31.72V30.6Zm0-2.4H16.8v1.2H31.72V28.2Zm0-2.4H16.8V27H31.72V25.8Zm-.02,7.16H26V39Z" transform="translate(-12 -18)"/>
                <path d="M24,14.94c-.86,0-1.5-1.06-1.5-2.46S23.14,10,24,10s1.5,1.06,1.5,2.46S24.86,14.94,24,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S24.28,10.8,24,10.8Z" transform="translate(-18 -8)"/>
                <path d="M44,14.94c-.86,0-1.5-1.06-1.5-2.46S43.14,10,44,10s1.5,1.06,1.5,2.46S44.86,14.94,44,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S44.28,10.8,44,10.8Z" transform="translate(-34 -8)"/>
                <path d="M64,14.94c-.86,0-1.5-1.06-1.5-2.46S63.14,10,64,10s1.5,1.06,1.5,2.46S64.86,14.94,64,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S64.28,10.8,64,10.8Z" transform="translate(-50 -8)"/>
                <path d="M84,14.94c-.86,0-1.5-1.06-1.5-2.46S83.14,10,84,10s1.5,1.06,1.5,2.46S84.86,14.94,84,14.94Zm0-4.14c-.28,0-.7.66-.7,1.66s.42,1.66.7,1.66.7-.66.7-1.66S84.28,10.8,84,10.8Z" transform="translate(-66 -8)"/>
              </g>
            </SvgIcon>
          }
          buttonStyle={tabButtonStyle}
          className="tab4"
          value={4}
        >
          <Notes/>
        </Tab>
      </Tabs>
    </div>
  );
}

export default muiThemeable()(MessengerSidebar);
