import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';

import { APIConfig } from '@constants';
import User from './user';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      user: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
    // this.fetchData = this.fetchData.bind(this);
  }
  componentWillMount() {
    // console.log('Component will Mount Called'+ APIConfig.hostname);
    this.fetchData();
  }
  fetchData() {
    const { user } = this.state;
    this.setState({ loading: true });
    fetch(APIConfig.hostname) //eslint-disable-line
    .then(response => response.json())
    .then((users) => {
      this.setState({
        user: user.cloneWithRows(users),
        loading: false,
      });
    });
  }
  render() {
    const { loading, user } = this.state;
    if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text> Loading ... please wait </Text>
        </View>);
    }
    return (
      <ListView
        dataSource={user}
        renderRow={data => <User data={data} />}
      />
    );
  }
}

export default UserList;

// <ListView dataSource: {user} />
