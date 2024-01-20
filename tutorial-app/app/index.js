import { View, Text } from "react-native";
import { View, Scrollview, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router'

import { COLORS, icons, images, SIZES } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'

const Home = () => {
    const Router = useRouter();
    return (
        <SafeAreaView>
            <Text>Home</Text>
        </SafeAreaView>
    )
}

export default Home;