/** @format */

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

interface customButtonProps {
    text: string;
    isLogin?: boolean;
    onPress?: () => void;
}

const CustomButton = ({
    text,
    onPress,
    isLogin = false,
}: customButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View
                style={{
                    backgroundColor: isLogin ? "#000" : "#A9A9A9",
                    ...styles.buttonContainer,
                }}
            >
                <Text
                    style={{
                        color: isLogin ? "#FFF" : "#000",
                        ...styles.textStyle,
                    }}
                >
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 20,
        paddingVertical: 17,
        justifyContent: "center",
        alignItems: "center",
    },
    textStyle: {
        fontFamily: "Poppins_500Medium",
        fontSize: 22,
    },
});

export default CustomButton;
