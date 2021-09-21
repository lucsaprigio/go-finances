import React, { useState } from 'react';
import { ActivityIndicator, Alert, Platform } from 'react-native';
import { useTheme } from 'styled-components';

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
    const [isLoading, setIsLoading] = useState(false);
    const { signInWithGoogle, signInWithApple } = useAuth();

    const theme = useTheme();
   
    async function handleSignInWithGoogle() {
      try{
          setIsLoading(true);
          return await signInWithGoogle(); // aguardar a função
      } catch (error) {
          console.log(error);
          Alert.alert('Não foi possível conectar com a conta Google')
          setIsLoading(false);
      } 
   }

    async function handleSignInWithApple() {
      try{
          setIsLoading(true);
          return await signInWithApple(); // aguardar a função
      } catch (error) {
          console.log(error);
          Alert.alert('Não foi possível conectar com a conta Apple')
          setIsLoading(false);
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

                   { 
                   Platform.OS === 'ios' &&
                   <SignInSocialButton 
                        title="Entrar com Apple"
                        svg={AppleSvg}
                        onPress={handleSignInWithApple}
                    />
                    }
                </FooterWrapper>

                { isLoading && 
                <ActivityIndicator 
                    color={theme.colors.shape} 
                    style={{ marginTop: 18 }}
                />}

            </Footer>
        </Container>
    );
}