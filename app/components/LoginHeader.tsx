/** @format */

import { View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const LoginHeader = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity>
                    <Ionicons name='arrow-back-outline' size={30} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});

export default LoginHeader;
