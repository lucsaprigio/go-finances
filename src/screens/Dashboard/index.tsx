import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';

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
    Transactions,
    Title,
    TransactionList
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

export function Dashboard(){
    const data = [
        {
        title:"Desenvolvimento de site",
        amount:"R$ 12.000,00",
        category: {
        name: 'Vendas',
        icon: 'dollar-sign'
         },
        date:"13/04/2020",
    },
        {
        title:"Desenvolvimento de site",
        amount:"R$ 12.000,00",
        category: {
        name: 'Vendas',
        icon: 'dollar-sign'
         },
        date:"13/04/2020",
    },
        {
        title:"Desenvolvimento de site",
        amount:"R$ 12.000,00",
        category: {
        name: 'Vendas',
        icon: 'dollar-sign'
         },
        date:"13/04/2020",
    }
];

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
        
            <Transactions>
                <Title>Listagem</Title>

                <TransactionList 
                    data={data}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: getBottomSpace()
                    }}
                />

                
            </Transactions>
        </Container>
    )
}