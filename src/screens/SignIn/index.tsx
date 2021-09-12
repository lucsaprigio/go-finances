import React from 'react';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';

import { useAuth } from '../../hooks/auth';

import { SignInSocialButton } from '../../components/SignInSocialButton';

import {
    Container,
    LogoSvg,
    Header,
    TitleWrapper,
    LogoTitle,
    Title,
    SignInTitle,
    Footer,
    FooterWrapper,
} from './styles';

export function SignIn(){
    const { user } = useAuth();
    console.log(user);

    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoTitle>
                    <LogoSvg name="dollar-sign"/>
                        gofinances
                    </ LogoTitle>
                    <Title>
                        Controle suas {'\n'}
                        finanças de forma {'\n'}
                        muito simples
                    </Title>
                </TitleWrapper>

                <SignInTitle>
                    Faça seu login com {'\n'}
                    uma das contas abaixo
                </SignInTitle>
            </Header>

            <Footer>
                <FooterWrapper>
                    <SignInSocialButton 
                        title="Entrar com Google"
                        svg={GoogleSvg}
                    />

                    <SignInSocialButton 
                        title="Entrar com Apple"
                        svg={AppleSvg}
                    />
                </FooterWrapper>

            </Footer>
        </Container>
    );
}