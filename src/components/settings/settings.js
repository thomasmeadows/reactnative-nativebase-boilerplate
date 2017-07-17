import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Input, Header, Content, Body, Container, Button, Text, Label } from 'native-base';

const ButtonContainer = styled.View`
  margin: 5;
`;

export default class Settings extends Component {
  state = {
    user: this.props.user,
    edit: false,
  };
  constructor(props){
    super(props);
    this.handleBackPress = this.handleBackPress.bind(this);
  }

  onPress = () => {
    if (this.state.edit) {
      this.props.updateUser(this.state.user);
      this.setState({ edit: false });
    } else {
      this.setState({ edit: true });
    }
  };

  onChangeFirstName = firstName => {
    this.setState(state => {
      const user = Object.assign({}, state.user, { firstName });
      return {
        user,
      };
    });
  };

  onChangeLastName = lastName => {
    this.setState(state => {
      const user = Object.assign({}, state.user, { lastName });
      return {
        user,
      };
    });
  };

  getButtonTitle = () => {
    if (this.state.edit) {
      return 'Save';
    }
    return 'Edit';
  };

  handleBackPress() {
    this.props.history.push('/');
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Text>
              {this.state.user.username}
            </Text>
          </Body>
        </Header>
        <Content>
          <Label>First Name</Label>
          <Input
            editable={this.state.edit}
            value={this.state.user.firstName}
            onChangeText={this.onChangeFirstName}
          />
          <Label>Last Name</Label>
          <Input
            editable={this.state.edit}
            value={this.state.user.lastName}
            onChangeText={this.onChangeLastName}
          />
          <ButtonContainer>
            <Button full onPress={this.onPress}>
              <Text>{this.getButtonTitle()}</Text>
            </Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button full onPress={this.handleBackPress}>
              <Text>Back</Text>
            </Button>
          </ButtonContainer>
        </Content>
      </Container>
    );
  }
}
