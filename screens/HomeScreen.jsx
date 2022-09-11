import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {

  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })


  }, [])

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-fuchsia-700">HomeScreen</Text>
    </SafeAreaView>
  )
}