/** @format */

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import TextField from "../components/TextField/TextField";
import CustomButton from "../components/CustomButton/CustomButton";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin } = useAuth();
    const login = () => {
        alert("login now");
    };
    return (
        <View style={{ backgroundColor: "#FFF", flex: 1 }}>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.titleText}>Let's Sign you in.</Text>
                    </View>
                    <View>
                        <Text style={styles.subTitle}>Welcome Back.</Text>
                        <Text style={styles.subTitle}>You've been missed!</Text>
                    </View>

                    <View style={styles.formContain}>
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
                    <View
                        style={{
                            marginTop: 40,
                        }}
                    >
                        <View style={styles.registerContainer}>
                            <Text style={styles.accountMsg}>
                                Don't have an account?
                            </Text>
                            <TouchableOpacity>
                                <Text style={styles.registerLink}>
                                    Register
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <CustomButton isLogin={true} text='Login' />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 20,
        gap: 25,
    },
    titleText: {
        fontSize: 27,
        fontFamily: "Poppins_500Medium",
    },
    formContain: {
        gap: 10,
    },
    subTitle: {
        fontSize: 28,
        color: "#A9A9A9",
        fontFamily: "Poppins_400Regular",
    },
    registerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
    },
    accountMsg: {
        fontFamily: "Poppins_400Regular",
        color: "#8f949c",
    },
    registerLink: {
        fontFamily: "Poppins_500Medium",
    },
});
export default Login;
