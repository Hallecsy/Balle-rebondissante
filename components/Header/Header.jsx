import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import styles from './Header.style';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Mon super Header</Text>
            <StatusBar style="auto" />
        </View>
    );
}