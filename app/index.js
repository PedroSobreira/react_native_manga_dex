import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{height: "100%"}}>
                <View className="w-full justify-center items-center min-h-[85vh] px-4">

                    <Text className="text-gray-100 mt-7 text-center">
                        MangaDex test index.js
                    </Text>
                    <Link href="/home" style={{color: "blue"}}>Go to Home</Link>
                    <Link href="/manga" style={{color: "blue"}}>Go to Manga</Link>
                    
                </View>
            </ScrollView>

            <StatusBar
                backgroundColor="#161622"
                style="light"
            />
        </SafeAreaView>
    );
}