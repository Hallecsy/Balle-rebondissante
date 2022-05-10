import { StyleSheet, Text, View, Pressable } from 'react-native';
import GameBoard from '../components/Content/GameBoard/GameBoard'

export default function GameScreen() {

    return (
        <GameBoard />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
});
