import styled from 'styled-components';

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
    margin-top: ${(props) => (props.home ? '25px' : '10px')};
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
    align-items: stretch;
    justify-content: flex-start;
    background-color: ${(props) => (props.dark ? '#000' : '#fff')};
    padding: 20px;
`;

export {
  BodyText, CardTitle, PageTitle, Subheading, PageView,
};
