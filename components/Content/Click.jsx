import { StyleSheet, Text, View } from 'react-native';

export default function Click(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>Tu as cliqué {props.count} fois</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    message: {
        marginTop: 10,
        fontSize: 20
    }
});