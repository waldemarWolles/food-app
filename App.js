import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'

function NumbersScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-green-500">33asdasdasdasd33</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Numbers" component={NumbersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
