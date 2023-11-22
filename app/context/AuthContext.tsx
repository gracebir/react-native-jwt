/** @format */

import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

interface AuthProps {
    authState?: { token: string | null; authenticated: boolean | null };
    onRegister?: (email: string, password: string) => Promise<any>;
    onLogin?: (email: string, password: string) => Promise<any>;
    onLogout?: () => Promise<any>;
}

const TOKEN_KEY = "my-jwt";
export const API_URL = "https://api.developbetterapps.com";
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [authState, setAuthState] = useState<{
        token: string | null;
        authenticated: boolean | null;
    }>({
        token: null,
        authenticated: null,
    });

    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStore.getItemAsync(TOKEN_KEY);
            console.log("stored:", token);
            if (token) {
                axios.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${token}`;
                setAuthState({
                    token: token,
                    authenticated: true,
                });
            }
        };
        loadToken();
    }, []);

    const register = async (email: string, password: string) => {
        try {
            return await axios.post(`${API_URL}/users`, { email, password });
        } catch (error) {
            return { error: true, msg: (error as any).response.data.msg };
        }
    };

    const login = async (email: string, password: string) => {
        try {
            const response = await axios.post(`${API_URL}/auth`, {
                email,
                password,
            });
            console.log("Auth.context", response);
            setAuthState({
                token: response.data.token,
                authenticated: true,
            });
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.data.token}`;

            await SecureStore.setItemAsync(TOKEN_KEY, response.data.token);

            return response;
        } catch (error) {
            return { error: true, msg: (error as any).response.data.msg };
        }
    };

    const logout = async () => {
        await SecureStore.deleteItemAsync(TOKEN_KEY);

        // Update http headers
        axios.defaults.headers.common["Authorization"] = "";

        //reset auth state
        setAuthState({
            token: null,
            authenticated: false,
        });
    };

    const value = {
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        authState,
    };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
