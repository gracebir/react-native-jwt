/** @format */

import {
    View,
    Text,
    TextInput,
    TextInputFocusEventData,
    NativeSyntheticEvent,
    KeyboardTypeOptions,
    TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { styles } from "./style";

interface textFieldProps {
    label: string;
    nativeID: string;
    placeholder: string;
    isPassword?: boolean;
    value: string;
    error?: string;
    onChange: (e: string) => void;
    onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    keyBoardOption: KeyboardTypeOptions;
}

const TextField = ({
    label,
    onChange,
    isPassword = false,
    placeholder,
    value,
    error,
    nativeID,
    keyBoardOption,
}: textFieldProps) => {
    const [show, setShow] = useState(false);
    const onToggle = () => {
        isPassword = !show;
        setShow((n) => !n);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.labelText}>{label}</Text>
            <View style={styles.textFieldContainer}>
                <TextInput
                    style={styles.textField}
                    onChangeText={onChange}
                    keyboardType={keyBoardOption}
                    value={value}
                    nativeID={nativeID}
                    secureTextEntry={isPassword && show}
                    placeholder={placeholder}
                />
                {isPassword && (
                    <TouchableOpacity onPress={onToggle}>
                        {show ? (
                            <Ionicons size={20} name='eye-off-outline' />
                        ) : (
                            <Ionicons size={20} name='eye-outline' />
                        )}
                    </TouchableOpacity>
                )}
            </View>
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

export default TextField;
