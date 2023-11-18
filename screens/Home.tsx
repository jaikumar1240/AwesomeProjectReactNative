import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight, FlatList, RefreshControl, TouchableOpacity } from "react-native";
import PalettePreview from "../components/PalettePreview";

const Home = ({ navigation }: any) => {
    const [colorPalettes, setColorPalettes] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const fetchColotPalettes = useCallback(async () => {
        const result = await fetch('https://color-palette-api.kadikraman.now.sh/palettes')
        if (result.ok) {
            const palettes = await result.json();
            setColorPalettes(palettes);
        }
    }, [])

    const handleRefresh = useCallback(async () => {
        setIsRefreshing(true)
        await fetchColotPalettes()
        setTimeout(() => {
            setIsRefreshing(false)
        }, 1000)
    }, [])


    useEffect(() => {
        fetchColotPalettes()
    }, [])



    return (
        <>
            <TouchableOpacity
                style={style.button}
                onPress={() => navigation.navigate('AddNewPaletteModal')}
            >
                <Text style={style.buttonText}>Add a color scheme</Text>
            </TouchableOpacity>
            <FlatList
                style={style.list}
                data={colorPalettes}
                renderItem={({ item }) => (
                    <PalettePreview handlePress={() => {
                        navigation.navigate('ColorPalette', item)
                    }}
                        colourPalette={item}
                    />
                )}
                refreshControl={
                    <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
                }
            />
        </>
    )
}




const style = StyleSheet.create({
    list: {
        backgroundColor: 'white',
        padding: 10

    },
     button: {
        height: 50,
        backgroundColor: 'white',
        padding: 10,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'teal',
    },
})


export default Home;