import { StyleSheet, Animated, View, Button } from 'react-native';
import { useState, useEffect, useRef } from 'react';

export default function GameBoard() {

    const boardCoords = [350, 350];
    const initPosition = { x: 0, y: 0 };

    const position = useRef(new Animated.ValueXY(initPosition)).current;

    const [ball, setBall] = useState([0, 0]);

    const animate = () => {
        Animated.timing(position, {
            toValue: { x: 329, y: 329 },
            duration: 1000,
            useNativeDriver: false
        }).start(() => {
            position.setValue(initPosition);
        });
    };

    return (
        <View>
            <View style={styles.board}>
                <Animated.View style={[position.getLayout(), styles.ball]} />
            </View>
            <Button title='Reset' onPress={animate} />
        </View>
    );
}

const styles = StyleSheet.create({
    board: {
        width: 350,
        height: 350,
        borderWidth: 3
    },
    ball: {
        borderRadius: 50,
        width: 15,
        height: 15,
        backgroundColor: '#f00'
    }
});