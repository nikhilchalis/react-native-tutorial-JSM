import { useState } from "react";
import { View, Scrollview, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router'

import { COLORS, icons, images, SIZES } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'

const Home = () => {
    const Router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen 
                screenOptions={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                }}
            />
        </SafeAreaView>
    )
}

export default Home;