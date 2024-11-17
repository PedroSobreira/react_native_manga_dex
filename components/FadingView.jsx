import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const FadingView = () => {
    const [showFullView, setShowFullView] = useState(false);

    return (
        <View style={styles.container}>
            <View style={[styles.content, showFullView ? null : styles.halfView]}>
                {/* Your content */}
                <Text style={styles.text}>This is some text inside the view.</Text>
                <Image
                    source={{ uri: 'https://via.placeholder.com/150' }}
                    style={styles.image}
                />
                <Text style={styles.text}>More content here...</Text>

                {/* Fading effect */}
                {!showFullView && (
                    <LinearGradient
                        colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
                        style={styles.gradient}
                    />
                )}
            </View>

            {/* Button to toggle full/half view */}
            <Button
                title={showFullView ? "Hide Half" : "Show Full"}
                onPress={() => setShowFullView(!showFullView)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    content: {
        position: 'relative',
        backgroundColor: '#f5f5f5',
        padding: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
    halfView: {
        height: 150, // Set the height for half view
    },
    text: {
        fontSize: 16,
        marginVertical: 10,
    },
    image: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',
        marginVertical: 10,
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50, // Adjust for fade length
    },
});

export default FadingView;
