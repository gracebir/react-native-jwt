/** @format */

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext";

const Home = () => {
    const { onLogout } = useAuth();
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.subContainer}>
                    <TouchableOpacity onPress={onLogout}>
                        <View style={styles.logOutBtn}>
                            <Ionicons size={25} name='log-out-outline' />
                            <Text style={styles.textLogout}>Log out</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flex: 1,
        padding: 20,
    },
    subContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    logOutBtn: {
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
    },
    textLogout: {
        fontSize: 18,
        fontFamily: "Poppins_700Bold",
    },
});

export default Home;
