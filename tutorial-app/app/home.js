import { useState } from "react";
import { View, Scrollview, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

import { COLORS, icons, images, SIZES } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';


const Home = () => {
    const Router = useRouter();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Stack />
            <Text>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home;