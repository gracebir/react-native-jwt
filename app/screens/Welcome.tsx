/** @format */

import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.imgContain}>
                        <Image source={require("../../assets/home.png")} />
                    </View>
                    <View style={styles.bodyContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.titleStyle}>
                                Welcome to SeekJob
                            </Text>
                            <View>
                                <Text style={styles.subTitle}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.{" "}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <CustomButton
                                onPress={() => {
                                    //@ts-ignore
                                    navigation.navigate("Login");
                                }}
                                isLogin={true}
                                text='Login'
                            />
                            <CustomButton text='Register' />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 20,
        gap: 49,
        justifyContent: "space-between",
        flex: 1,
    },
    imgContain: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        alignItems: "center",
        gap: 5,
    },
    titleStyle: {
        fontSize: 36,
        textAlign: "center",
        fontFamily: "Poppins_600SemiBold",
    },
    subTitle: {
        fontFamily: "Poppins_400Regular",
        textAlign: "center",
        fontSize: 15,
        paddingHorizontal: 18,
    },
    bodyContainer: {
        gap: 30,
    },
    buttonContainer: {
        gap: 10,
    },
});

export default Welcome;
