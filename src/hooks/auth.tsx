import React, { 
    createContext,
    ReactNode,
    useContext,
} from 'react';

import * as Google from 'expo-google-app-auth';

interface AuthProviderProps {
    children: ReactNode;
}

interface IAuthContextData {
    user: User;
    signInWithGoogle(): Promise<void>;
}

interface User {
    id: string;
    name: string;
    email: string;
    photo?: string;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const user = {
        id: '123123',
        name: 'Lucas Aprigio',
        email: 'lucsaprigio@hotmail.com',
    }

    async function signInWithGoogle(){
        try {
            const result = await Google.logInAsync({
                iosClientId: '217452025768-ah8vs3bsl48k4tmadh0i1d8t1j38vig8.apps.googleusercontent.com',
                androidClientId: '217452025768-0jqrfbdhq9gqnefbpbr2tievpq0rcd7s.apps.googleusercontent.com',
                scopes: ['profile', 'email']
            })

            if(result.type === 'success') {
                const userLogged = {
                    id: String(result.user.id),
                    email: result.user.email!,
                    name: result.user.name!,
                    photo: result.user.photoUrl!
                };

                console.log(userLogged);
            }


        }catch(error){
            throw new Error(error);
        }
    }

    return(
        <AuthContext.Provider value={{ 
                user,
                signInWithGoogle
            }}>
            { children }
        </AuthContext.Provider>
    );
}

function useAuth(){
    const context= useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };