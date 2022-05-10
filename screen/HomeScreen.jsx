import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import Click from '../components/Content/Click';
import BrightnessComponent from '../components/Content/BrightnessComponent';
import axios from 'axios';

export default function HomeScreen(props) {

    const [count, setCount] = useState(0);

    const [beerName, setBeerName] = useState("")

    useEffect(() => {
        (async () => {
            const beer = await axios.get('https://random-data-api.com/api/beer/random_beer');
            setBeerName(beer.data.name)
        })();
      }, []);
    
    

    

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={{ fontWeight: "bold", fontSize: 25 }}>Bonjour !</Text>

                <Text style={{ fontWeight: "bold", fontSize: 15 }}>La bière de la semaine est la { beerName }</Text>

                <BrightnessComponent />

                <Pressable style={styles.button} onPress={() => setCount(count + 1)} >
                    <Text style={styles.buttonText}>Clique moi !</Text>
                </Pressable>
                {count > 0 ? <Click count={count} /> : null}

                <StatusBar style="auto" />

                <Text style={styles.text}>ou</Text>
                <Pressable style={styles.button} onPress={() => props.navigation.navigate('Game')}>
                    <Text style={styles.buttonText}>Tu préfères jouer à un jeu ?</Text>
                </Pressable>
            </View>
        </View>
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
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        marginTop: 20
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    text: {
        marginTop: 15,
        fontSize: 25
    }
});
