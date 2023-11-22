/** @format */

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";
import { Formik } from "formik";
import React from "react";
import { useAuth } from "../context/AuthContext";
import TextField from "../components/TextField/TextField";
import CustomButton from "../components/CustomButton/CustomButton";
import { loginSchema } from "../../utils/baseSchema";

const Login = () => {
    const { onLogin, onRegister } = useAuth();
    // const login = async () => {
    //     const result = await onLogin!(email, password);
    //     if (result && result.error) {
    //         alert(result.msg);
    //     }
    // };

    // we automatically call the login after a successful registration
    const register = async () => {};
    return (
        <View style={{ backgroundColor: "#FFF", flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={loginSchema}
                    onSubmit={async (values) => {
                        const result = await onLogin!(
                            values.email,
                            values.password
                        );
                        if (result && result.error) {
                            alert(result.msg);
                        }
                    }}
                >
                    {({
                        handleChange,
                        values,
                        handleBlur,
                        handleSubmit,
                        errors,
                    }) => (
                        <View style={styles.container}>
                            <View>
                                <Text style={styles.titleText}>
                                    Let's Sign you in.
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.subTitle}>
                                    Welcome Back.
                                </Text>
                                <Text style={styles.subTitle}>
                                    You've been missed!
                                </Text>
                            </View>

                            <View style={styles.formContain}>
                                <TextField
                                    nativeID='email'
                                    error={errors.email}
                                    value={values.email}
                                    onBlur={handleBlur("email")}
                                    onChange={handleChange("email")}
                                    placeholder='Enter username or email'
                                    label='Username or Email'
                                    keyBoardOption='email-address'
                                />
                                <TextField
                                    nativeID='password'
                                    error={errors.password}
                                    value={values.password}
                                    isPassword={true}
                                    onBlur={handleBlur("password")}
                                    onChange={handleChange("password")}
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
                                <CustomButton
                                    onPress={() => {
                                        handleSubmit();
                                    }}
                                    isLogin={true}
                                    text='Login'
                                />
                            </View>
                        </View>
                    )}
                </Formik>
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
