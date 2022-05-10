import { StyleSheet, Text, View } from 'react-native';
import * as Brightness from 'expo-brightness';
import { useEffect, useState } from 'react';

export default function BrightnessComponent() {

    const [bright, setBright] = useState(1)

    useEffect(() => {
      (async () => {
        const { status } = await Brightness.requestPermissionsAsync();
        setBright(await Brightness.getBrightnessAsync());
      })();
    }, []);

    return (
        <View>
            <Text style={styles.message}>Ta luminosité est à {(bright.toFixed(2)) * 100}% </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    message: {
        marginTop: 5,
        fontSize: 20
    }
});