import React from 'react';
import { View, Text } from 'react-native';

const User = ({ data }) => { //eslint-disable-line
  const { name, username, email, phone, website, address, company } = data;
  const { street, suite, city, zipcode } = address;
  const { containerStyle, textStyle } = styles; //eslint-disable-line
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>Name: {name}</Text>
      <Text style={textStyle}>UserName: {username}</Text>
      <Text style={textStyle}>Email:{email}</Text>
      <Text style={textStyle}>Phone: {phone}</Text>
      <Text style={textStyle}>Website: {website}</Text>
      <Text style={textStyle}>Address:{street}, {suite} {city}</Text>
      <Text style={textStyle}>zipcode: {zipcode}</Text>
      <Text style={textStyle}>Company: {company.name}</Text>
    </View>
  );
};
User.PropTypes = {
  data: React.PropTypes.string.isRequired,
};

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#9b59b6',
    margin: 5,
    padding: 5,
  },
  textStyle: {
    color: '#ecf0f1',
  },
};
export default User;
