import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      username: undefined,
      password: undefined,
    };
  }
  submit() {
    const { username, password } = this.state;
    if (username === 'admin' && password === 'admin') {
      console.log(this.state.username);
      console.log(this.state.password);
      Actions.app({ type: 'reset' });
    }
  }
  render() {
    const {
      containerStyle, formContainerStyle,
      inputWrap, labelWrap, label, input,
      button, buttonText,
    } = styles; //eslint-disable-line
    return (
      <View style={containerStyle}>
        <View style={formContainerStyle}>
          <View style={inputWrap}>
            <View style={labelWrap}>
              <Text style={label}>Username: </Text>
            </View>
            <TextInput
              placeholder="Username"
              ref={(el) => { this.username = el; }}
              onChangeText={(username) => this.setState({ username })}
              value={this.state.username}
              style={input}
            />
          </View>
          <View style={inputWrap}>
            <View style={labelWrap}>
              <Text style={label}>Password: </Text>
            </View>
            <TextInput
              ref={(el) => { this.password = el; }}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
              placeholder="Password"
              style={input}
              secureTextEntry
            />
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => this.submit()}>
            <View style={button}>
              <Text style={buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = {
  containerStyle: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#bdc3c7',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  formContainerStyle: {
    backgroundColor: 'white',
    margin: '2%',
  },
  titleStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrap: {
    flexDirection: 'row',
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },
  labelWrap: {
    paddingLeft: 5,
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
  },

  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#2980b9',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5%',
    marginTop: '0%',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
};

export default connect()(Login);
