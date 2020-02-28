import React from "react";
import { Grid } from "semantic-ui-react";
import "./App.css";
import { connect } from "react-redux";
import SidePanel from "./SidePanel/SidePanel";
import Messages from "./Messages/Messages";
import MetaPanel from "./MetaPanel/MetaPanel";

const App = ({ currentUser, currentChannel, userPosts }) => (
  <Grid columns="equal" className="app" style={{ background: "#eee" }}>
    <SidePanel key={currentUser && currentUser.uid} currentUser={currentUser} />

    <Grid.Column style={{ marginLeft: 270 }}>
      <Messages
        key={currentChannel && currentChannel.id}
        currentChannel={currentChannel}
        currentUser={currentUser}
      />
    </Grid.Column>

    <Grid.Column width={4}>
      <MetaPanel
        key={currentChannel && currentChannel.id}
        userPosts={userPosts}
        currentChannel={currentChannel}
      />
    </Grid.Column>
  </Grid>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
  userPosts: state.channel.userPosts,
});

export default connect(mapStateToProps)(App);
