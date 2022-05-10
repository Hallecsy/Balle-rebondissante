import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './Footer.style';

export default function Footer() {
    return (
        <View style={styles.container}>
            <Text style={styles.footer}>Mon super Footer</Text>
            <StatusBar style="auto" />
        </View>
    );
}