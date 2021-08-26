import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    const [data, setData] = useState<DataListProps[]>([]);

    
    async function loadTransactions() { 
        const dataKey = '@gofinances:transactions';
        const response = await AsyncStorage.getItem(dataKey);
        const transactions = response ? JSON.parse(response) : [];

        const transactionsFormatted: DataListProps[] = transactions
        .map((item: DataListProps) => {
            const amount = Number(item.amount)
            .toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });

            const date = Intl.DateTimeFormat('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit'
            }).format(new Date(item.date));

            return {
                id: item.id,
                name: item.name,
                amount,
                type: item.type,
                category: item.category,
                date,
            }
        });

        setData(transactionsFormatted);
    }

    useEffect(() => {
        loadTransactions();
    },[])


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