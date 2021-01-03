import styled from 'styled-components/native';
import React from 'react';

const BodyText = styled.Text`
    font-weight: 300;
    font-size: 15px;
    line-height: 35px;
    letter-spacing: -0.24px;
    color: #000000;
    text-align: left;
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
const PageTitle = styled.Text`
    font-weight: 300;
    font-size: 45px;
    line-height: 50px;
    letter-spacing: -0.32px;
    color: ${(props) => (props.dark ? '#fff' : '#000')};
    text-align: ${(props) => (props.start ? 'center' : 'left')};
    margin-bottom: 0px;
    margin-top: ${(props) => (props.home ? '50px' : '10px')};
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
const PageView = styled.View`
    align-items: center;
    justify-content: flex-start;
    background-color: ${(props) => (props.dark ? '#000' : '#fff')};
    padding: 20px;
    flex: 1;
`;
const ButtonText = styled.Text`
    font-size: 20px;
    color: #000;
    margin-right: 0px;
    margin-top: auto;
    margin-bottom: auto;
`;

const ButtonContainer = styled.TouchableOpacity`
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

export {
  BodyText, CardTitle, PageTitle, Subheading, PageView, PressableButton,
};
