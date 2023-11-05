import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";



const PalettePreview = ({ handlePress, colourPalette }: any) => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>{colourPalette.paletteName}</Text>
            <FlatList
                style={styles.previewColorBoxList}
                data={colourPalette.colors.slice(0, 5)}
                renderItem={({ item }) => (
                    <View style={[{ backgroundColor: item.hexCode }, styles.previewColorBox]}>
                    </View>
                )}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    },
    previewColorBox: {
        width: 30,
        height: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    previewColorBoxList: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 20

    }
})

export default PalettePreview;