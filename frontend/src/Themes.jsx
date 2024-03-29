import styled from 'styled-components/native';
import React from 'react';

// General Styles:
export const PageTitle = styled.Text`
    font-weight: ${(props) => (props.profile ? 600 : 300)};
    font-size: 40px;
    line-height: 50px;
    letter-spacing: -0.32px;
    color: black;
    margin-bottom: ${(props) => (props.profile ? '0px' : '5px')};
    margin-top: ${(props) => (props.detaileddata || props.profile ? '0px' : '30px')};
    margin-left: ${(props) => (props.data ? '15px' : '0px')};
    align-self: ${(props) => (props.center ? 'center' : 'flex-start')};
`;

export const PageView = styled.View`
    align-items: center;
    background-color: white;
    padding: 15px;
    flex: 1;
`;

export const BodyText = styled.Text`
    font-weight: 300;
    font-size: 15px;
    line-height: ${(props) => (props.signin ? '20px' : '35px')};
    letter-spacing: -0.24px;
    color: black;
    align-self: ${(props) => (props.center ? 'center' : 'flex-start')};
    margin-left: ${(props) => (props.profile ? '20px' : '0px')};
    margin-right: ${(props) => (props.profile ? '10px' : '0px')};
    margin-bottom: ${(props) => (props.signin ? '5px' : '0px')};
`;

export const Subheading = styled.Text`
    font-weight: ${(props) => (props.profile ? 400 : 600)};
    font-size: 20px;
    line-height: 20px;
    letter-spacing: -0.32px;
    color: ${(props) => (props.profile ? 'gray' : 'black')};
    text-align: left;
    margin-bottom: 5px;
`;

export const BoilerplateView = styled(PageView)`
    justify-content: center;
    align-items: center;
`;

// Styles for Cards, with props that allow them to be used with different styles:
export const CardTitle = styled.Text`
    font-size: ${(props) => (props.data ? '30px' : '25px')};
    line-height: 45px;
    font-weight: ${(props) => (props.data ? 'bold' : 'normal')};
    letter-spacing: -0.24px;
    color: black;
    text-align: ${(props) => (props.center ? 'center' : 'left')};
`;

export const CardView = styled.View`
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

export const CardText = styled.Text`
    font-size: 20px;
    color: black;
    align-self: flex-start;
    margin-left: ${(props) => (props.left ? '10px' : '0px')};
`;

export const DiagnosticsCard = styled(CardView)`
    padding: 20px;
    paddingTop: 0px;
    background-color: ${(props) => (props.center ? '#F9F6FF' : '#CFDFF7')};;
    align-items: center;
    margin-right: 15px;
    margin-left: 15px;
`;

export const DiagnosticsScroll = styled.SafeAreaView`
    flex: 1;
    background-color: white;
    align-items: stretch;
    justify-content: center;
`;

// Styles for the Home Page Card:
export const HomeCardView = styled(CardView)`
    padding: 20px;
    padding-top: 8px;
    height: 300px;
    justify-content: space-between;
`;

export const HomeCardData = styled.View`
    background-color: transparent;
    padding: 0;
    flex-direction: row;
    justify-content: space-between;
`;

export const HomeCardData2 = styled(HomeCardData)`
    justify-content: flex-start;
`;

export const HomeCardTitle = styled.Text`
    font-size: 50px;
    line-height: 50px;
    font-weight: bold;
    letter-spacing: -0.24px;
    color: black;
    text-align: center;
`;

// Styles for Data & Detailed Data pages:
export const DataView = styled.SafeAreaView`
    flex: 1;
    background-color: white;
    align-items: stretch;
`;

export const DataPointView = styled.View`
    justify-content: space-between;
    flex-direction: row;
`;

export const DataScrollView = styled.SafeAreaView`
    flex: 1;
    background-color: white;
    align-items: stretch;
    padding-top: 15px;
    justify-content: center;
`;

export const AmbianceTitle = styled(PageTitle)`
    align-self: flex-start;
    margin: 0px;
    margin-right: 150px;
    line-height: 40px;
    margin-bottom: 0px;
`;

export const ButtonText = styled.Text`
    font-size: 20px;
    color: black;
    align-self: ${(props) => (props.center ? 'center' : 'flex-start')};
`;

export const ButtonContainer = styled.Pressable`
    background-color: ${(props) => (props.ambiance ? '#CFDFF7' : '#A6CDF0')};
    justify-content: center;
    height: 50px;
    border-radius: 10px;
    margin-top: 8px;
    padding-left: 15px;
    align-self: stretch;
    elevation: 6;
`;

export const SignInButtonContainer = styled(ButtonContainer)`
    justify-content: center;
    height: 40px;
    width: 325px;
    align-content: center;
    align-self: center;
    padding: 0px;
    margin-bottom: 10px;
`;

export const PreferencesView = styled.View`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0px;
    background: transparent;
    margin-bottom: 15px;
`;

export const PreferencesTitle = styled(AmbianceTitle)`
    margin-right: 0px;
    margin-bottom: 20px;
`;

export const ProfileView = styled.SafeAreaView`
    flex: 1;
    background-color: #F9F6FF;
    align-items: stretch;
`;

export const ProfilePointView = styled.View`
    flex-direction: ${(props) => (props.profile ? 'row' : 'column')};
    justify-content: flex-start;
`;

export const SignInTitle = styled(AmbianceTitle)`
    align-self: center;
`;

export const PressableButton = ({ onPress, title }) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);

export const SignInButton = ({ onPress, title }) => (
  <SignInButtonContainer onPress={onPress}>
    <ButtonText center>{title}</ButtonText>
  </SignInButtonContainer>
);

export const AmbianceButton = ({ onPress, title }) => (
  <ButtonContainer ambiance onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);
