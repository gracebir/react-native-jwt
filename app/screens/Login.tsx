/** @format */

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import TextField from "../components/TextField/TextField";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin } = useAuth();
    const login = () => {
        alert("login now");
    };
    return (
        <View style={styles.container}>
            <View>
                <Text>Let's us Sign you in.</Text>
            </View>
            <View>
                <Text>Welcome Back.</Text>
                <Text>You've been missed!</Text>
            </View>
            <View>
                <TextField
                    nativeID='email'
                    value={email}
                    onChange={(email: string) => {
                        setEmail(email);
                    }}
                    placeholder='Enter username or email'
                    label='Username or Email'
                    keyBoardOption='email-address'
                />
                <TextField
                    nativeID='password'
                    value={password}
                    isPassword={true}
                    onChange={(password: string) => {
                        setPassword(password);
                    }}
                    placeholder='Enter Password'
                    label='Password'
                    keyBoardOption='default'
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flex: 1,
        paddingHorizontal: 20,
    },
});
export default Login;
