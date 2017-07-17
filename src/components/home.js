import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Header, Body, Title, Container, Content, Button, Text } from 'native-base';

const ButtonContainer = styled.View`
  margin: 5;
`;

export default class HomeComponent extends Component {
  constructor(props){
    super(props);
    this.handleSettingsPress = this.handleSettingsPress.bind(this);
  }
  handleSettingsPress() {
    this.props.history.push('/settings');
  }
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Hello</Title>
          </Body>
        </Header>
        <Content>
          <ButtonContainer>
            <Button full onPress={this.handleSettingsPress}>
              <Text>Settings</Text>
            </Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button full onPress={this.props.logout}>
              <Text>Logout</Text>
            </Button>
          </ButtonContainer>
        </Content>
      </Container>
    );
  }
}
