import styled from 'styled-components/native';
import { FontAwesome5  } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
    flex: 1;
`;

export const LogoTitle = styled.Text`
    flex: 1;

    margin-top: 70%;

    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.regular};

    color: ${({ theme }) => theme.colors.shape};

`;

export const LogoSvg = styled(FontAwesome5)`
    font-size: ${RFValue(34)}px;
    color: ${({theme }) => theme.colors.secondary};
`;

export const Header = styled.View`
    width: 100%;
    height: 70%;

    background-color: ${({ theme }) => theme.colors.primary};

    justify-content: flex-end;
    align-items: center;
`;
export const TitleWrapper = styled.View`
    align-items: center;

`;
export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(30)}px;

    text-align: center;
`;
export const SignInTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(16)}px;

    text-align: center;

    margin-top: 80px;
    margin-bottom: 67px;
`;
export const Footer = styled.View`
    width: 100%;
    height: 30%;

    background-color: ${({ theme  }) => theme.colors.secondary};
`;

export const FooterWrapper = styled.View`
    margin-top: ${RFPercentage(-4)}px;
    padding: 0 32px;

    justify-content: space-between;
`;