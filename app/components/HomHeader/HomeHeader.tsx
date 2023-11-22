/** @format */

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const HomeHeader = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.settingContainer}>
                    <TouchableOpacity>
                        <Ionicons size={30} name='settings-outline' />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    settingContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
});

export default HomeHeader;
