/** @format */

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        gap: 2,
    },
    textField: {
        backgroundColor: "#FFF",
        fontFamily: "Poppins_400Regular",
        fontSize: 17,
        flex: 1,
    },
    errorText: {
        color: "red",
        marginLeft: 10,
        fontWeight: "bold",
        fontStyle: "italic",
    },
    textFieldContainer: {
        borderColor: "#A9A9A9",
        borderWidth: 2,
        borderRadius: 20,
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
    },
    labelText: {
        color: "#000",
        fontFamily: "Poppins_400Regular",
        fontSize: 15,
        marginLeft: 10,
    },
});
