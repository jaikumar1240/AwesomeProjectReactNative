import 'react-native-gesture-handler'
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import { createStackNavigator } from '@react-navigation/stack';
import AddNewPaletteModal from './screens/ColorPaletteModal';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name='Main' component={MainStackScreen} options={{ headerShown: false }} />
        <RootStack.Screen name='AddNewPaletteModal' component={AddNewPaletteModal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Home' component={Home} />
      <MainStack.Screen name='ColorPalette' component={ColorPalette}
        options={({ route }: any) => ({
          title: route.params.paletteName
        })}
      />
    </MainStack.Navigator>
  )
}

export default App;