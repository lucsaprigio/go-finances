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
    Transactions,
    Title,
    TransactionList,
    LogoutButton,
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard(){
    const data: DataListProps[] = [
        {
        id: '1',
        type: 'positive',
        title:"Desenvolvimento de site",
        amount:"R$ 12.000,00",
        category: {
        name: 'Vendas',
        icon: 'dollar-sign'
         },
        date:"13/04/2020",
    },
        {
        id: '2',
        type: 'negative',
        title:"Hamburgueria Pizzy",
        amount:"R$ 12.000,00",
        category: {
        name: 'Vendas',
        icon: 'coffee'
         },
        date:"13/04/2020",
    },
        {
        id: '3',
        type: 'positive',
        title:"Desenvolvimento de site",
        amount:"R$ 12.000,00",
        category: {
        name: 'Vendas',
        icon: 'shopping-bag'
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

            <LogoutButton onPress={() => {}}>
                <Icon name="power"/>
            </LogoutButton>

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
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />

            </Transactions>
        </Container>
    )
}