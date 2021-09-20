import React from 'react';
import { Alert } from 'react-native';

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
    const { user, signInWithGoogle, signInWithApple } = useAuth();
   
    async function handleSignInWithGoogle() {
      try{
          await signInWithGoogle(); // aguardar a função
      } catch (error) {
          console.log(error);
          Alert.alert('Não foi possível conectar com a conta Google')
      }
    }

    async function handleSignInWithApple() {
      try{
          await signInWithApple(); // aguardar a função
      } catch (error) {
          console.log(error);
          Alert.alert('Não foi possível conectar com a conta Apple')
      }
    }

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
                        onPress={handleSignInWithGoogle}
                    />

                    <SignInSocialButton 
                        title="Entrar com Apple"
                        svg={AppleSvg}
                        onPress={handleSignInWithApple}
                    />
                </FooterWrapper>

            </Footer>
        </Container>
    );
}