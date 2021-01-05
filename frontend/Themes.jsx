import styled from 'styled-components/native';
import React from 'react';

// General Styles:
const PageTitle = styled.Text`
    font-weight: 300;
    font-size: 40px;
    line-height: 50px;
    letter-spacing: -0.32px;
    color: black;
    margin-bottom: 5px;
    margin-top: 30px;
    margin-left: ${(props) => (props.data ? '15px' : '0px')};
    align-self: ${(props) => (props.center ? 'center' : 'flex-start')};
`;

const PageView = styled.View`
    align-items: ${(props) => (props.center ? 'center' : 'flex-start')};
    justify-content: flex-start;
    background-color: white;
    padding: 15px;
    flex: 1;
`;

const BodyText = styled.Text`
    font-weight: 300;
    font-size: 15px;
    line-height: 35px;
    letter-spacing: -0.24px;
    color: black;
    align-self: ${(props) => (props.center ? 'center' : 'flex-start')};
`;

const Subheading = styled.Text`
    font-weight: 600;
    font-size: 20px;
    line-height: 35px;
    letter-spacing: -0.32px;
    color: black;
    text-align: left;
    margin-bottom: 5px;
`;

// Styles for Cards, with props that allow them to be used with different styles:
const CardTitle = styled.Text`
    font-weight: 300;
    font-size: ${(props) => (props.data ? '30px' : '25px')};
    line-height: 45px;
    letter-spacing: -0.24px;
    color: black;
    text-align: ${(props) => (props.center ? 'center' : 'left')};
`;

const CardView = styled.View`
    background-color: #A6CDF0;
    padding: ${(props) => (props.data ? '15px' : '0px')};
    padding-top: ${(props) => (props.data ? '8px' : '0px')};
    align-items: stretch;
    align-self: stretch;
    justify-content: center;
    border-radius: 10px;
    margin-top: 7px;
    margin-bottom: 7px;
    margin-right: ${(props) => (props.data ? '15px' : '0px')};
    margin-left: ${(props) => (props.data ? '15px' : '0px')};
    elevation: 6;
`;

// Styles for Data & Detailed Data pages:
const DataView = styled.View`
    flex: 1;
    background-color: white;
    align-items: stretch;
    justify-content: flex-start;
`;

const DataPointView = styled.View`
    justify-content: space-between;
    flex-direction: row;
`;

const DataScrollView = styled.SafeAreaView`
    flex: 1;
    background-color: white;
    align-items: stretch;
    padding-top: 30px;
    justify-content: center;
`;

// Styles for Settings Page:
const SettingsView = styled.View`
    flex: 1;
    background-color: white;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 15px;
`;

const ButtonText = styled.Text`
    font-size: 20px;
    color: black;
    margin-top: auto;
    margin-bottom: auto;
    align-self: flex-start;
`;

const ButtonContainer = styled.Pressable`
    background-color: #A6CDF0;
    height: 50px;
    border-radius: 10px;
    margin-top: 8px;
    padding: 15px;
    align-self: stretch;
    elevation: 6;
`;

const PressableButton = ({ onPress, title }) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);

// Style for Start Page:
const StartView = styled.View`
    flex: 1;
    background-color: white;
    align-items: stretch;
    justify-content: flex-start;
`;

export {
  BodyText, ButtonText, CardTitle, CardView, DataView, DataPointView,
  DataScrollView, PageTitle, PageView, PressableButton,
  SettingsView, Subheading, StartView,
};
