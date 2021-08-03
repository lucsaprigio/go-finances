import React from 'react';

import { 
    Container, 
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName, 
    UserWrapper,
    Icon,
    HightlightCards,
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';

export function Dashboard(){
    return (
        <Container>
            <Header>
                <UserWrapper>
                <UserInfo>
                    <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/68642596?v=4'}} />

                    <User>
                        <UserGreeting>Olá,</UserGreeting>
                        <UserName>Lucas</UserName>
                    </User>

                </UserInfo>

                <Icon name="power"/>
            </UserWrapper>
            </Header>

            <HightlightCards>
                <HighlightCard 
                type="up"
                title="Entradas" 
                amount="17.400,00" 
                lastTransaction="Última entrada dia 13 de abril"
                />
                <HighlightCard 
                type="down"
                title="Saídas" 
                amount="1.259,00" 
                lastTransaction="Última entrada dia 13 de abril"
                />
                <HighlightCard 
                type="total"
                title="Total" 
                amount="16.141,00" 
                lastTransaction="Última entrada dia 13 de abril"
                />
           </HightlightCards>
        </Container>
    )
}