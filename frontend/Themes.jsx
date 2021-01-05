import styled from 'styled-components/native';
import React from 'react';

const PageTitle = styled.Text`
    font-weight: 300;
    font-size: 40px;
    line-height: 50px;
    letter-spacing: -0.32px;
    color: #000;
    margin-bottom: 5px;
    margin-top: 30px;
    align-self: ${(props) => (props.center ? 'center' : 'flex-start')};
`;

const PageView = styled.View`
    align-items: ${(props) => (props.center ? 'center' : 'flex-start')};
    justify-content: flex-start;
    background-color: #fff;
    padding: 20px;
    flex: 1;
`;

const BodyText = styled.Text`
    font-weight: 300;
    font-size: 15px;
    line-height: 35px;
    letter-spacing: -0.24px;
    color: #000000;
    align-self: ${(props) => (props.center ? 'center' : 'flex-start')};
`;

const Subheading = styled.Text`
    font-weight: 600;
    font-size: 20px;
    line-height: 35px;
    letter-spacing: -0.32px;
    color: #000000;
    text-align: left;
    margin-bottom: 5px;
`;

const CardTitle = styled.Text`
    font-weight: 300;
    font-size: 30px;
    line-height: 45px;
    letter-spacing: -0.24px;
    color: #000000;
    text-align: left;
    margin-bottom: 3px;
`;

const CardView = styled.View`
    flex: 1;
    background-color: #A6CDF0;
    padding: 20px;
    padding-top: 8px;
    align-items: stretch;
    justify-content: center;
    border-radius: 10px;
    margin: 7px;
`;

const DataView = styled.View`
    justify-content: space-between;
    flex-direction: row;
`;

const DataScrollView = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    padding: 20px;
    align-items: stretch;
    justify-content: center;
`;

const ButtonText = styled.Text`
    font-size: 20px;
    color: #000;
    margin-top: auto;
    margin-bottom: auto;
    align-self: flex-start;
`;

const ButtonContainer = styled.Pressable`
    background-color: #A6CDF0;
    height: 50px;
    border-radius: 10px;
    margin-top: 8px;
    padding: 10px;
    align-self: stretch;
`;

const PressableButton = ({ onPress, title }) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);

const SettingsView = styled.View`
    flex:1 1;
    background-color: #fff;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
`;

export {
  BodyText, CardTitle, CardView, DataView, DataScrollView, PageTitle, PageView, PressableButton,
  Subheading, SettingsView,
};
