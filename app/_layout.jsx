import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import React from 'react'
import "../global.css"; 

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}} />
        </Stack>
    )
}

export default RootLayout

const styles = StyleSheet.create({})