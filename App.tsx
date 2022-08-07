import { StatusBar } from 'expo-status-bar'
import { useEffect, useRef } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native'

import bearAnimationJSON from './84848-polar-bear.json'

export default function App() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <LottieView
                autoPlay
                loop
                resizeMode="contain"
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#eee',
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={bearAnimationJSON}
            />
        </View>
    )
}
