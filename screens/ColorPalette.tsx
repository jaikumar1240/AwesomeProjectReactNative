import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import ColorBox from "../components/ColorBox";


const ColorPallette = ({ route }: any) => {
    const { colors, paletteName } = route.params;
    return (
        <SafeAreaView style= {styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.heading}>{paletteName }</Text>
                <FlatList
                    data={colors}
                    keyExtractor={item => item.hexCode}
                    renderItem={({ item }) => {
                        return <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
                    }}
                    ItemSeparatorComponent={() => { return <View style={{ height: 10 }} /> }}
                >
                </FlatList>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'white'
    },
    container: {
        margin: 10,
        gap: 10,
    },
    heading: {
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default ColorPallette;