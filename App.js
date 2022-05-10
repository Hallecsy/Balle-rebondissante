import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import GameScreen from './screen/GameScreen';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Game">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "Page d'accueil",
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerRight: () => {
              
              const navigation = useNavigation();

              return (
                <Button
                  title="Jouer"
                  color="#000"
                  onPress={() => navigation.navigate('Game')}
                />
              )
            },
          }} />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{
            headerTitle: "Rebond",
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerBackTitle: 'Retour'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
