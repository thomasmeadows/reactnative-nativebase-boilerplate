import React, { Component } from 'react';
import { Redirect } from 'react-router-native';
import api from '../../api';
import { Header, Body, Title, Form, Item, Input, Container, Content, Button, Text } from 'native-base';

export default class Login extends Component {
  constructor(props) {
   super(props);
   this.username = '';
   this.password = '';
  }

  handleLoginPress = () => {
    api.login(this.username, this.password).then(user => this.props.login(user));
  };

  handleUsernameTextChange = (e) => {
    this.username = e;
  };

  handlePasswordTextChange = (e) => {
    this.password = e;
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    if (this.props.user) {
      return <Redirect to={from} />;
    }
    return (
      <Container>
        <Header>
          <Body>
            <Title>Login</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" onChangeText={this.handleUsernameTextChange}/>
            </Item>
            <Item last>
              <Input secureTextEntry={true} placeholder="Password" onChangeText={this.handlePasswordTextChange}/>
            </Item>
            <Button full onPress={this.handleLoginPress}>
              <Text>Login</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
