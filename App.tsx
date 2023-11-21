/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { AuthProvider, useAuth } from "./app/context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./app/screens/Home";
import Login from "./app/screens/Login";
import { useEffect } from "react";
import LoginHeader from "./app/components/LoginHeader";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <AuthProvider>
            <Layout></Layout>
        </AuthProvider>
    );
}

export const Layout = () => {
    const { authState, onLogout } = useAuth();
    const [loaded, error] = useFonts({
        Poppins_500Medium,
        Poppins_400Regular,
        Poppins_700Bold,
        Poppins_600SemiBold,
    });
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {authState?.authenticated ? (
                    <Stack.Screen name='Home' component={Home} />
                ) : (
                    <Stack.Screen
                        options={{
                            header: () => <LoginHeader />,
                        }}
                        name='Login'
                        component={Login}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
