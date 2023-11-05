import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ColorBox = (props: any) => {
    const boxColor = {
        backgroundColor: props.hexCode,
    };
    const textColor = {
        color: parseInt(props.hexCode.replace("#", ""), 16) > 0xffffff / 1.1 ? "black" : "white",
    };
    return (
        <View style={[styles.colorBox, boxColor]}>
            <Text style={[styles.colorBar, textColor]}>
                {props.colorName}: {props.hexCode}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    colorBox: {
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "white",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    colorBar: {
        width: "100%",
        textAlign: "center",
        textAlignVertical: "center",
        fontWeight: "bold",

    },
});

export default ColorBox;