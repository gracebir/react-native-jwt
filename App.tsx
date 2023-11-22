/** @format */
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
import Welcome from "./app/screens/Welcome";
import HomeHeader from "./app/components/HomHeader/HomeHeader";

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
            <Stack.Navigator initialRouteName='Welcome'>
                {authState?.authenticated ? (
                    <Stack.Screen
                        options={{
                            header: () => <HomeHeader />,
                        }}
                        name='Home'
                        component={Home}
                    />
                ) : (
                    <>
                        <Stack.Screen
                            options={{
                                headerShown: false,
                            }}
                            name='Welcome'
                            component={Welcome}
                        />
                        <Stack.Screen
                            options={{
                                header: () => <LoginHeader />,
                            }}
                            name='Login'
                            component={Login}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
