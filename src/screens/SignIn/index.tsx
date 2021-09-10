import React from 'react';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';

import {
    Container,
    LogoSvg,
    Header,
    TitleWrapper,
    LogoTitle,
    Title,
    SignInTitle,
    Footer,
} from './styles';

export function SignIn(){
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

            </Footer>
        </Container>
    );
}